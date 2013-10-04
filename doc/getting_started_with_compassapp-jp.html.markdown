# Compass.appの使い方

Compass.app は Sass と Compass が使いたいけど、コマンドラインを操作するのに抵抗を感じているという方のために作ったGUIツールです。 Windows / Mac OS / Linux 全てに対応しています。 インストールも必要ない、シンプルなツールです。

[Compass.app のオフィシャルサイト](http://compass.kkbox.com/)で購入できます。購入した後にはダウンロードリンクを含むメールが届きます。 お持ちの OS に対応したものをダウンロードして、ZIP ファイルを解凍してください。


### Windows
Compass.app に必要なファイルが入ったフォルダが解凍されたら、このフォルダを好きな所に配置して下さい（Dropbox に置いても大丈夫です）。 Compass-app.exe をクリックして起動すると、タスクトレイにグレーアイコンが表示されます。

 
![Windows](http://compass.kkbox.com/doc/windows.jpg)

### Mac OS
解凍されたCompass.appを、好きな所に配置してください（Dropbox に置いても大丈夫です）。 Compass.app をクリックして起動すると、メニューバーにグレーアイコンが表示されます。

  
![Mac OS](http://compass.kkbox.com/doc/osx.jpg)

### Linux
Compass.app に必要なファイルが入ったフォルダが解凍されたら、このフォルダを好きな所に配置して下さい（Dropbox に置いても大丈夫です）。 run.sh を実行すると、メニューバーにグレーアイコンが表示されます。

  
![Linux](http://compass.kkbox.com/doc/linux.jpg)

**注: Compass.app は JAVA で開発した為、起動には多少時間がかかります。数秒ほどお待ちください。**


## プロジェクトを作成

シンプルな compass プロジェクトを例に説明します。 Compass.app を起動し、アイコンをクリックして、"Create Compass Project" -> "compass" -> "project" を順番に選び、プロジェクトの名前を入力して保存します。

![dialog window](http://compass.kkbox.com/doc/create-project.png)

保存した後、プロジェクト作成の成功を示すダイアログボックスが表示されます。それと同時にアイコンはオレンジ色になります。それは Compass.app がこのプロジェクトを "Watch" しているという意味です。

プロジェクトフォルダの構成は以下のようになっています：

![project folder](http://compass.kkbox.com/doc/project-folder.png)

    awesome-website/
      - sass/
        - screen.scss
        - ...
      - stylesheets/
        - ...
      - .sass-cache/   // 隠し sass cache フォルダです。触れないでください。
      - config.rb      // Compass 設定ファイルです。削除しないでください。


これでお気に入りの IDE でプロジェクトが編集できます。 SCSS や Sass ファイルを保存するたびに、自動的に CSS にコンパイルされます。


## Preferences 解説
Compass.app アイコンをクリックして "Preferences" を選ぶと、いろんな設定ができます。

### Compass

![Compass](http://compass.kkbox.com/doc/preference-compass.png)

* Preferred Syntax:   
Sass には SCSS (.scss) と Sass (indented syntax, .sass) という2種類のシンタックスがあります。 Compass.app ではこの両方が使えます。プロジェクトを作成する時、ここでテンプレートのシンタックスを選択してください。

* Compass Version:   
Compass.app のデフォルトは [ Compass の最新安定版バージョン](http://compass-style.org/CHANGELOG/) を使用しています。もし他の Sass / Compass バージョンが使いたい場合、および RubyGems でパッケージ管理したい場合は、 "Custom" を選んでください。
**注意！上級ユーザーのみにお勧めします！**

### Notification

![Notification](http://compass.kkbox.com/doc/preference-notification.png)

Compass.app は [Growl](http://growl.info/) に対応しているので、好きなメッセージタイプを選べます。デバッグのためのログ出力もできます。 

### Services

![Services](http://compass.kkbox.com/doc/preference-services.png)

**Enable Web Server:**   
ここにチェックを入れると、 Compass.app からプロジェクトパスで軽量 Web サーバ (WEBrick) を起動できます。ブラウザに `http://localhost:24680` と入力すると、実際のプロジェクトページを見ることができます。ポート番号のデフォルト値は変更可能です。

**Enable LiveReload:**   
Compass.app 1.2+ は LiveReload をサポートしています。 LiveReload を使用するとファイルを保存した時に自動でブラウザをオートリロードします。ご利用にはブラウザエクステンションのインストールが必要です。 Web サーバと LiveReload を両方チェックすると、 "[LiveReload.js](https://github.com/livereload/livereload-js)"　が使えます。(@livereload によりMITライセンスで公開されているものを利用させていただいてます。感謝しています。) [LiveReload 2](http://livereload.com/)もお勧めです。

* [LiveReloadブラウザエクステンション](http://help.livereload.com/kb/general-use/browser-extensions)
* 古いバージョン：
    - Safari: [Download LiveReload 1.6.2 extension](https://github.com/downloads/mockko/livereload/LiveReload-1.6.2.safariextz). 
    - [Chrome](https://chrome.google.com/extensions/detail/jnihajbhpnppcggbcgedagnkighmdlei)
    - [Firefox](https://addons.mozilla.org/zh-TW/firefox/addon/livereload/)

もしブラウザエクステンションを使いたくない場合は、HTMLの中に以下のコードを貼ると LiveReload が自動的に起動します。

    <script>document.write('<script src="http://'
    + (location.host || 'localhost').split(':')[0]
    + ':35729/livereload.js?snipver=1"></'
    + 'script>')</script>


### History

![History](http://compass.kkbox.com/doc/preference-history.png)

"Clear History" ボタンをクリックすると、プロジェクトの履歴リストは削除されます。


## Options
"Watch" しているプロジェクトは、オプション変更できます。出力CSSの整形と "line comments" / "debug info" の付加もできます。

## 他の設定
ここからは変更が必要になることが多い部分ですが、 "Preferences" および "Options" にはない二箇所の設定について説明します：

### フォルダ名前の変更
CSS作成フォルダ名前のデフォルトは "stylesheet" です。もし変更したい場合は、 `config.rb` のこの部分を編集してください：

    css_dir = "stylesheets"
    
`config.rb` を保存した後は、 "Stop Watching …" をクリックしてから、再度このプロジェクトを "Watch" し直すと、CSS作成フォルダの名前が変更できます。

[image-url()](http://compass-style.org/reference/compass/helpers/urls/#image-url) に関連する Compass helper を使う場合で、かつ画像フォルダの名前が "images" ではない場合は、 `config.rb` のこの部分を編集してください：

    images_dir = "images"


### 絶対パスを相対パスに変更
デフォルトでは、 [image-url()](http://compass-style.org/reference/compass/helpers/urls/#image-url) に関連する Compass helper を使う場合は、作成されるCSSは絶対パスになります。相対パスに変更したい場合は、 `config.rb` の中に

    relative_assets = true

と入力してください。

**注意！ `config.rb` 更新後は必ず "Stop Watching …" をクリックしてから、再度このプロジェクトを "Watch" し直すと、新しい設定が利用できます。**

今の設定を他のプロジェクトにも使いたい場合は、 `config.rb` を該当するプロジェクトフォルダにコピーしたら使用できます。


## 既存プロジェクトに Compass.app を使用する場合
既存プロジェクトに Compass.app を使用する場合、プロジェクトフォルダの中には以下のものが必要です：

* **sass フォルダ**： `.scss` や `.sass` ファイル、どれか一つが必要です。 
* **config.rb**： 他のプロジェクトからコピーしてください。必ず中の設定を確認してください。

**注: もし初期設定を一切変更せず、ただ Compass.app で Sass をコンパイルしたいだけの場合は、 `config.rb` が必要ない [Sass Mode](https://github.com/KKBOX/CompassApp/wiki/Sass-mode) も使うことができます。**

既存プロジェクトのCSSについては、時間があれば SCSS にリライトした方がより良いですが、もし時間がない場合は、 SCSS は CSS3 のシンタックスのスーパーセットなので、簡単に既存 CSS のファイル拡張子 `.css` を `.scss` に変更するだけでそのまま使えます。もしくは SCSS `@import` を使用すればオッケーです。

## SASS & Compass 参考リンク

* [Sassの公式Webサイト](http://sass-lang.com/)
* [Compassの公式Webサイト](http://compass-style.org/)

---
**このページに対する[@ken_c_loさん](https://twitter.com/ken_c_lo)の修正と意見に感謝します！**
