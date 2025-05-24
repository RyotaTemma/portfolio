<script setup>
</script>

<template>
  <section id="projects" class="scroll-mt-16 container mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 my-8 animate-fade-in delay-1400">
    <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8 md:mb-12">
      プロジェクト
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <!-- プロジェクト1 -->
      <div class="bg-gray-50 rounded-lg shadow-md overflow-hidden animate-fade-in delay-1500">
        <img
          src="../assets/images/ibaritsu2.jpg"
          alt="いばりつ2025出展"
          class="w-full h-48 object-cover"
          onerror="this.onerror=null;this.src='https://placehold.co/600x400/e0f2f7/0288d1?text=No+Image';"
        >
        <div class="p-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">
            いばりつ2025
          </h3>
          <p class="text-sm font-medium text-blue-600 mb-3">
            都市開発のためのタンジブルインタフェースの提案
          </p>
          <p class="text-gray-700 text-base mb-4">
            大学の研究室で取り組んでいる、マルチエージェントシミュレーション（MAS）を用いた交通シミュレーションと、それに基づく未来の都市再開発を行うためのテーブルを展示しました。
            たくさんの方にご来場いただき、来場者との対話を通じて、今までの研究の方向性が間違っていないことを確信できました。
          </p>
          <div class="mb-4 ml-1">
            <a
              href="https://collabodesign.org/2025/05/19/951/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded hover:bg-blue-200 transition"
            >
              研究室のホームページでの活動報告はこちら
            </a>
          </div>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">GAML</span>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">GAMA Platform</span>
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">MAS</span>
          </div>
          <div class="text-right">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              出展済み
            </span>
          </div>
        </div>
      </div>

      <!-- プロジェクト2 -->
      <div class="bg-gray-50 rounded-lg shadow-md overflow-hidden animate-fade-in delay-1600">
        <img
          src="https://placehold.co/600x400/f0f4c3/7cb342?text=Shift+App+Concept"
          alt="シフト自動生成アプリケーションの画像"
          class="w-full h-48 object-cover"
          onerror="this.onerror=null;this.src='https://placehold.co/600x400/f0f4c3/7cb342?text=No+Image';"
        >
        <div class="p-6">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">
            塾向けシフト自動生成アプリケーション
          </h3>
          <p class="text-sm font-medium text-green-600 mb-3">
            遺伝的アルゴリズム (GA) を活用した最適化
          </p>
          <p class="text-gray-700 text-base mb-4">
            自分のアルバイト先において夏期講習などの長期講習の時バイト講師が自分たちでシフトを組まないといけないという負担がありました。
            それを解決するため、講師のシフト作成における複雑な制約（各講師の希望、科目、スキル、教室の空き状況など）を考慮し、
            遺伝的アルゴリズムを用いて最適なシフトを自動生成するWebアプリケーションを構想しています。
            業務効率化と講師の満足度向上を目指します。
          </p>
          <div class="flex flex-wrap gap-2 mb-4">
            <span class="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Python</span>
            <span class="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Flask</span>
            <span class="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">Genetic Algorithm</span>
          </div>
          <div class="text-right">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
              構想中
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template> 