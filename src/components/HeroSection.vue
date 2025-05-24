<script setup>
import { onMounted } from 'vue'
</script>

<template>
  <section id="about" class="scroll-mt-16 container mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 my-8 animate-fade-in">
    <div class="flex flex-col md:flex-row items-center md:items-start md:space-x-10 space-y-8 md:space-y-0 mb-8">
      <div class="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-md border-4 border-blue-100 animate-fade-in delay-100">
        <img
          src="../assets/images/profile.jpg"
          alt="自分の写真"
          class="w-full h-full object-cover"
          @error="$event.target.src='https://placehold.co/256x256/a8dadc/1d3557?text=No+Image'"
        >
      </div>

      <div class="flex-grow text-center md:text-left animate-fade-in delay-200">
        <p class="text-xl md:text-2xl font-medium text-gray-700 mb-2 md:mb-1">
          立命館大学院 情報理工学部
        </p>
        <h1 class="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          天満 亮太
          <span class="block text-xl md:text-3xl font-bold text-blue-600 mt-1 md:mt-2">
            修士1回生
          </span>
        </h1>
        <p class="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0">
          様々なことに好奇心を持ち、一歩踏み出して挑戦するチャレンジ精神があります。
        </p>
      </div>
    </div>

    <hr class="my-10 border-gray-200 animate-fade-in delay-200">

    <div class="text-base md:text-lg text-gray-700 leading-relaxed mb-10 animate-fade-in delay-300">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">私について</h2>
      <p class="mb-4">
        新しいことや知らない世界に対して、私はとにかく強い好奇心を持っています。研究では、将来の都市のあり方や再開発に関する提案を行っていますが、あるとき「自分の提案に説得力があるのか？」と疑問に感じたことがありました。そこで、都市計画や土地利用の基礎をしっかり理解するために、宅地建物取引士の資格を取得しました。
      </p>
      <p class="mb-4">
        「知ってから作る」「作りながら学ぶ」——この姿勢は、研究に限らず私のスタイルです。例えば、友人と船釣りに行ったら楽しそうだな、と思い立ったことがきっかけで、１週間で特殊小型船舶と一級小型船舶の免許を取得したこともあります。「面倒かもしれないけど、やってみたい」と思ったら、とりあえず挑戦してみるのが私の性分です。
      </p>
      <p class="mb-4">
        また、旅行も好きで、最近はインドを２週間旅し、ガンジス川に実際に入ってみるなど、自分の見たことのない場所に行き、普段はできないことをやってみるのが大好きです。
      </p>
      <p>
        やると決めたら短期集中でやり切ること。そして、知らないことに飛び込むことを楽しめること。これが、私の強みです。
      </p>
    </div>

    <hr class="my-10 border-gray-200 animate-fade-in delay-300">

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 animate-fade-in delay-400">
      <div>
        <h3 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l5 3 5-3m-5 3v5" />
          </svg>
          学歴
        </h3>
        <ul class="list-none space-y-3 text-gray-700">
          <li class="flex items-start">
            <span class="text-blue-500 mr-2">&bull;</span>
            <div>
              <p class="font-semibold">立命館大学 情報理工学部 情報理工学科</p>
              <p class="text-sm text-gray-600">2020年4月 - 2024年3月 卒業</p>
              <p class="text-sm text-gray-600">（専攻：計算機科学、計算社会科学）</p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-blue-500 mr-2">&bull;</span>
            <div>
              <p class="font-semibold">三田学園高等学校</p>
              <p class="text-sm text-gray-600">2017年4月 - 2020年3月 卒業</p>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          資格
        </h3>
        <ul class="list-none space-y-3 text-gray-700">
          <li class="flex items-start">
            <span class="text-green-500 mr-2">&bull;</span>
            <div>
              <p class="font-semibold">宅地建物取引士</p>
              <p class="text-sm text-gray-600">2024年 取得</p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-green-500 mr-2">&bull;</span>
            <div>
              <p class="font-semibold">特殊小型船舶操縦士&1級小型船舶操縦士</p>
              <p class="text-sm text-gray-600">2024年 取得</p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-green-500 mr-2">&bull;</span>
            <div>
              <p class="font-semibold">基本情報技術者試験</p>
              <p class="text-sm text-gray-600">2024年 取得</p>
            </div>
          </li>
          <li class="flex items-start">
            <span class="text-green-500 mr-2">&bull;</span>
            <div>
              <p class="font-semibold">ITパスポート</p>
              <p class="text-sm text-gray-600">2020年 取得</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>