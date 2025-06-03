<script setup>
</script>

<template>
  <section id="research" class="scroll-mt-16 container mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 my-8 animate-fade-in delay-500">
    <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8 md:mb-12">
      研究活動
    </h2>

    <div class="text-base md:text-lg text-gray-700 leading-relaxed mb-10 animate-fade-in delay-600">
      <h3 class="text-xl font-bold text-blue-700 mb-4">研究テーマ</h3>
      <p class="mb-4">
        私の研究は計算社会科学の分野に属し、マルチエージェントシミュレーション（MAS）を用いて、都市や社会システムにおける複雑な現象の理解と解決策の提案に取り組んでいます。
        特に、都市再開発や交通、合意形成支援といった現実社会の課題に対して、シミュレーションモデルの構築を通じてアプローチしています。
      </p>
      <p class="mb-4">
        また、専門家だけでなく市民も活用できるような、直感的に操作可能なシミュレーション環境やインタフェースの開発にも取り組んでおり、研究室内で協力しながら開発を進めています。
        この開発は研究室メンバーと協力して，それぞれの得意分野を活かしながら分担して行なっています。
        私はその中で、フロントエンドの人が触る部分のインタフェースの設計から内部のシミュレーションモデルの構築までコーディングに関わる実装部分を幅広く担当しています。
      </p>
      <p class="mb-4">
        学会やイベントでは、こうしたシミュレーション環境をワークショップ形式で多くの方に体験していただく取り組みも行っており、設計から実装、運用まで一貫して携わった経験は、今後の実践にも活かせると考えています。
      </p>
      <div class="mt-6">
        <div class="flex flex-wrap gap-6 justify-center">
            <img src="@/assets/images/ibaritsu.jpeg" alt="イベント出展の様子" class="max-w-xl max-h-96 w-auto h-auto rounded shadow-lg object-contain" />
            <img src="@/assets/images/interface.jpg" alt="インターフェース" class="max-w-xl max-h-96 w-auto h-auto rounded shadow-lg object-contain" />
        </div>
      </div>
    </div>

    <hr class="my-10 border-gray-200 animate-fade-in delay-600">

    <h3 class="text-2xl font-bold text-gray-800 mb-4 flex items-center animate-fade-in delay-700">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-purple-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253" />
      </svg>
      研究発表・論文
    </h3>
    <ul class="list-none space-y-4 text-gray-700 animate-fade-in delay-800">
      <li class="bg-gray-50 rounded-lg p-4 shadow-sm border border-gray-200">
        <a
          href="https://www.ipsj.or.jp/event/taikai/87/WEB/data/pdf/5W-08.html"
          target="_blank"
          rel="noopener noreferrer"
          class="font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300 flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          マルチエージェント社会シミュレーションのための都市モデル生成機構の開発 - 情報処理学会, 2025年
        </a>
        <p class="text-sm text-gray-600 mt-1">
          都市施作立案の場において人々の議論を促進するため、都市デザインの初期案を自動生成する手法を提案
        </p>
      </li>

    </ul>
  </section>
</template> 