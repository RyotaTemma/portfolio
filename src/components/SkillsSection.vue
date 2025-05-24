<script setup>
</script>

<template>
  <section id="skills" class="scroll-mt-16 container mx-auto bg-white rounded-xl shadow-lg p-6 md:p-10 my-8 animate-fade-in delay-900">
    <h2 class="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8 md:mb-12">
      スキル
    </h2>
    <div class="grid grid-cols-1 gap-8">
      <!-- MAS/シミュレーション -->
      <div class="animate-fade-in delay-1000">
        <h3 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          MAS / 交通シミュレーション開発
        </h3>
        <ul class="list-none space-y-3 text-gray-700">
          <li>
            <div class="flex items-center">
              <img src="../assets/icons/gama.png" alt="GAMA Platform Icon" class="w-6 h-6 mr-2 flex-shrink-0">
              <p class="font-semibold">GAML (GAMA Platform)</p>
            </div>
            <p class="text-sm text-gray-500 mt-2 ml-8">
              マルチエージェントシミュレーション（MAS）を用いた交通・人流シミュレーションの研究・開発
            </p>
          </li>
        </ul>
      </div>
      <!-- Webアプリ -->
      <div class="animate-fade-in delay-1100">
        <h3 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          ワークショップなどを行うためのフルスタック開発
        </h3>
        <ul class="list-none space-y-3 text-gray-700">
          <li>
            <div class="flex items-center">
              <img src="https://img.icons8.com/color/48/python.png" alt="Python icon" class="w-6 h-6 mr-2 flex-shrink-0">
              <p class="font-semibold">Python</p>
            </div>
            <p class="text-sm text-gray-500 mt-2 ml-8">
              バックエンドAPIやデータ処理、Webアプリの構築に活用
            </p>
          </li>
          <li>
            <div class="flex items-center">
              <img src="https://img.icons8.com/color/48/html.png" alt="HTML icon" class="w-6 h-6 mr-2 flex-shrink-0">
              <p class="font-semibold">HTML</p>
            </div>
            <p class="text-sm text-gray-500 mt-2 ml-8">
              Webページの構造設計やUI実装
            </p>
          </li>
          <li>
            <div class="flex items-center">
              <img src="https://img.icons8.com/color/48/css.png" alt="CSS icon" class="w-6 h-6 mr-2 flex-shrink-0">
              <p class="font-semibold">CSS</p>
            </div>
            <p class="text-sm text-gray-500 mt-2 ml-8">
              デザイン・レイアウト調整、レスポンシブ対応
            </p>
          </li>
          <li>
            <div class="flex items-center">
              <img src="https://img.icons8.com/color/48/javascript--v1.png" alt="JavaScript icon" class="w-6 h-6 mr-2 flex-shrink-0">
              <p class="font-semibold">JavaScript</p>
            </div>
            <p class="text-sm text-gray-500 mt-2 ml-8">
              フロントエンドの動的処理やインタラクション実装
            </p>
          </li>
        </ul>
      </div>
      <!-- 3Dゲーム/趣味 -->
      <div class="animate-fade-in delay-1300">
        <h3 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          3Dゲーム開発 / 趣味開発
        </h3>
        <ul class="list-none space-y-3 text-gray-700">
          <li>
            <div class="flex items-center">
              <img src="https://img.icons8.com/color/48/c-plus-plus.png" alt="C++ icon" class="w-6 h-6 mr-1 flex-shrink-0">
              <img src="https://img.icons8.com/color/48/unreal-engine.png" alt="Unreal Engine icon" class="w-6 h-6 mr-2 flex-shrink-0">
              <p class="font-semibold">趣味としての3D開発(学習中)</p>
            </div>
            <p class="text-sm text-gray-500 mt-2 ml-8">
                人に見てもらったり、触ってもらうようなものを作る中でビジュアル的にも楽しい3Dの開発に興味を持ち、趣味として学習中。現在はC++でテトリスが作れる程度だが，，，</p>
          </li>
        </ul>
      </div>
      <div class="animate-fade-in delay-1300">
        <h3 class="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          地図データの解析・加工
        </h3>
        <ul class="list-none space-y-3 text-gray-700">
          <li>
            <div class="flex items-center">
              <img src="../assets/icons/qjis.png" alt="QGIS icon" class="w-6 h-6 mr-2 flex-shrink-0">
              <p class="font-semibold">QGIS</p>
            </div>
            <p class="text-sm text-gray-500 mt-2 ml-8">
              OpenStreetMapやゼンリンの地図データからの道路・施設データ抽出、用途地域マッピングに使用
            </p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template> 