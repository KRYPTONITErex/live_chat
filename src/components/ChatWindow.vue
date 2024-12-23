<template>
    <div class="chat-window">
        <div class="messages" ref="msgBox" >
            <div class="single" v-for="message in formattedMessages" :key="message.id">
                <span class="created-at">{{ message.createdAt }}</span>
                <div class="message-header">
                    <span class="name">{{ message.name }}:</span>
                    <span class="message">{{ message.message }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed, onUpdated, ref } from 'vue';
import { db } from '../firebase/config';
import { formatDistanceToNow } from 'date-fns';

export default {
    setup() {
        let messages = ref([]);
        let msgBox = ref(null);

        //auto Scrolling feature
        onUpdated(() => {
            console.log(msgBox.value.scrollHeight);
            msgBox.value.scrollTop = msgBox.value.scrollHeight;
        })

        let formattedMessages = computed(() => {
            return messages.value.map((msg) => {
                let formatTime = formatDistanceToNow(msg.createdAt.toDate())
                return {...msg,createdAt:formatTime}
            })
        })

        db.collection('messages').orderBy('createdAt').onSnapshot((snap) => {
            let results = [];
            snap.docs.forEach((doc) => {
                let document = { ...doc.data(), id: doc.id };

                // if(){
                    doc.data().createdAt && results.push(document);
                // }

            });
            messages.value = results;
        });

        return { messages, formattedMessages , msgBox };
    },
};
</script>

<style>
.chat-window {
    width: 90%;
    height: auto;
    max-width: 100%;
    margin: 20px auto;
    padding: 10px;
    background-color: #f9f9f9;
    border-radius: 10px 0px 10px 0px;
    overflow-y: auto;
}

.messages {
    display: flex;
    flex-direction: column;
    gap: 15px;
    overflow-y: auto;  /* This enables vertical scrolling */
    max-height: 600px;  /* Adjust this height according to your design */
}

.single {
    display: flex;
    flex-direction: column;
    background-color: #fffbf4;
    padding: 10px;
    border-radius: 0px 8px 0px 8px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.created-at {
    font-size: 12px;
    color: #888;
    margin-bottom: 5px; /* Adds space between created-at and the next line */
}

.message-header {
    display: flex;
    flex-direction: row;
}

.name {
    font-weight: bold;
    color: #333;
    font-size: 15px;
    margin-right: 5px;
}

.message {
    font-size: 14px;
    color: #555;
}
</style>