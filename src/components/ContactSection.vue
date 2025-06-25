<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  message: ''
});
const submitMessage = ref('');
const submitMessageType = ref('');

// Vercel Serverless FunctionのエンドポイントURLに置き換える
// ローカル開発中は http://localhost:3000/api/contact など、Vercelデプロイ後は /api/contact 
const API_ENDPOINT_URL = '/api/contact'; 

const submitForm = async () => {
  submitMessage.value = '送信中...';
  submitMessageType.value = '';

  try {
    const response = await fetch(API_ENDPOINT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
    });

    const data = await response.json();

    if (response.ok) {
      submitMessage.value = 'メッセージが送信されました！';
      submitMessageType.value = 'success';
      // フォームリセット
      form.value.name = '';
      form.value.email = '';
      form.value.message = '';
    } else {
      submitMessage.value = `送信に失敗しました: ${data.message || '不明なエラー'}`;
      submitMessageType.value = 'error';
    }
  } catch (error) {
    console.error('フォーム送信エラー:', error);
    submitMessage.value = 'メッセージの送信中にエラーが発生しました。';
    submitMessageType.value = 'error';
  } finally {
    setTimeout(() => {
      submitMessage.value = '';
    }, 5000);
  }
};
</script>

<template>
  <section id="contact" class="scroll-mt-16 container mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 my-8 animate-fade-in delay-100">
    <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8 md:mb-12">
        各種SNSや連絡はこちら
    </h2>

    <div class="flex flex-col items-center space-y-4 mb-10">
      <div class="flex items-center space-x-3 min-w-[220px]">
          <img src="https://img.icons8.com/ios-filled/32/new-post.png" alt="Email icon" class="w-8 h-8 flex-shrink-0">
          <a href="mailto:is0624se@ed.ritsumei.ac.jp" class="text-blue-600 font-medium hover:underline break-all">
            is0624se@ed.ritsumei.ac.jp
          </a>
        </div>
        <div class="flex items-center space-x-3 min-w-[220px]">
          <img src="https://img.icons8.com/ios-filled/32/github.png" alt="GitHub icon" class="w-8 h-8 flex-shrink-0">
          <a
            href="https://github.com/RyotaTemma"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-600 font-medium hover:underline break-all"
          >
            GitHub: RyotaTemma
          </a>
        </div>
        </div>

    <hr class="my-10 border-gray-200 animate-fade-in delay-200">

    <div class="max-w-2xl mx-auto animate-fade-in delay-300">
        <h3 class="text-2xl font-bold text-gray-800 text-center mb-6">
            メッセージを送る
        </h3>
      <form @submit.prevent="submitForm" class="space-y-6">
        <div>
          <label for="name" class="block text-lg font-medium text-gray-700 mb-2">お名前</label>
          <input
            type="text"
            id="name"
            v-model="form.name"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
            placeholder="お名前を入力してください"
          >
        </div>
        <div>
          <label for="email" class="block text-lg font-medium text-gray-700 mb-2">メールアドレス</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
            placeholder="メールアドレスを入力してください"
          >
        </div>
        <div>
          <label for="message" class="block text-lg font-medium text-gray-700 mb-2">メッセージ</label>
          <textarea
            id="message"
            v-model="form.message"
            rows="5"
            required
            class="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-base"
            placeholder="メッセージを入力してください"
          ></textarea>
        </div>
        <div class="text-center">
          <button
            type="submit"
            class="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300 transform hover:-translate-y-0.5"
          >
            メッセージを送信する
          </button>
        </div>
        <p v-if="submitMessage" :class="['text-center mt-4 text-sm font-medium', submitMessageType === 'success' ? 'text-green-600' : 'text-red-600']">
          {{ submitMessage }}
        </p>
        <p class="text-center text-gray-500 text-xs mt-4">
          ※フォームから送信された情報はVercel Serverless Functionを経由してサイト所有者に通知します。
        </p>
      </form>
    </div>
  </section>
</template>
