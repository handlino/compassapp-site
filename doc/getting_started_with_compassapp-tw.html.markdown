# Compass.app 使用說明

首先下載符合自己作業系統的 Compass.app 檔案，並將檔案解壓縮。可參考下列對應於所使用作業系統之說明：

### Windows
解壓縮檔案後會得到一個包含 Compass.app 所需檔案之資料夾，可將此資料夾搬移至想放置的位置，執行 Compass-app.exe 即可啟動 Compass.app 並看見灰色的小 icon 出現在右下角的工作列中。
  
![Windows](http://compass.kkbox.com/doc/windows.jpg)

### Mac OS
解壓縮檔案後會得到一個檔名為 Compass.app 的檔案，可搬移至想放置的位置。執行此 app 便可看見灰色的小 icon 出現在 menu bar 。
  
![Mac OS](http://compass.kkbox.com/doc/osx.jpg)

### Linux
解壓縮後會得到一個包含 Compass.app 所需檔案之資料夾，可將此資料夾搬移至想放置的位置，執行 run.sh 即可啟動 Compass.app 並看見灰色的小 icon 出現在 menu bar 。
  
![Linux](http://compass.kkbox.com/doc/linux.jpg)

**注: 因 Compass.app 以 Java 撰寫，啟動時可能花費數秒，請耐心等待。**


## 建立Compass專案
欲建立 Compass 專案，只要點擊 Compass.app icon 並點選 "Create Compass Project" -> "compass" -> "project" ，為新專案命名並存檔。

![dialog window](http://compass.kkbox.com/doc/create-project.png)

畫面上將出現一個對話框顯示專案已成功建立，同時 icon 將轉變為橙色，即表示此專案正在被 "watch" 。可使用任何自己慣用的編輯器來編輯專案，當任何 Sass 檔案被變更後存檔時， Compass.app 便會自動產生出相應的 CSS 檔案。

所產生之專案資料夾結構如下：

![project folder](http://compass.kkbox.com/doc/project-folder.png)

    awesome-website/
      - sass/
        - screen.scss
        - ...
      - stylesheets/
        - ...
      - .sass-cache/   // 隱藏的 sass cache 資料夾，請勿變更
      - config.rb      // Compass 設定檔，請勿刪除


## Preferences
在 preferences 選項中可調整下列設定：

### Compass

![Compass](http://compass.kkbox.com/doc/preference-compass.png)

* Preferred Syntax:   
Sass 有兩種語法可供選擇，分別是 SCSS (.scss) 和 indented syntax (.sass) 。 Compass.app 兩種語法皆支援，此處所選擇的是專案建立時產生樣板檔案所使用的語法。

* Compass Version:   
Compass.app 預設使用[最新 stable 版本的 Compass](http://compass-style.org/CHANGELOG/) 。若是想使用其他版本的 Sass/Compass ，或使用 RybyGems 來管理 Compass extensions ，則需使用 "Custom" 選項。**注意：非進階使用者不建議使用。**

### Notification

![Notification](http://compass.kkbox.com/doc/preference-notification.png)

Compass.app 支援 [Growl](http://growl.info/) ，可選擇想顯示的通知訊息類型。也可以選擇是否產出 debug 用的log 檔。

### Services

![Services](http://compass.kkbox.com/doc/preference-services.png)

**Enable Web Server:**   
若開啟此選項， Compass.app 將在專案路徑啟動一個微 server (WEBrick) ，如此一來便可在瀏覽器中開啟 `http://localhost:24680` 來即時預覽實際上的編輯結果，預設的 port 是 `24680` 但可以自行更換成想要的port。

**Enable LiveReload:**   
Compass.app 1.2 版之後內建了對 LiveReload 的支援，如此便可免去編輯頁面後必須手動重新整理的步驟。欲使用此功能必須安裝瀏覽器外掛，若同時開啟 web server 和 livereload 功能，也可以使用 [livereload-js](https://github.com/livereload/livereload-js) 來達成目的。(感謝使用 MIT Licens 的 @livereload 。) 我們也推薦使用 [LiveReload 2](http://livereload.com/) 。

* [LiveReload 提供的瀏覽器外掛](http://help.livereload.com/kb/general-use/browser-extensions)
* 舊版本：
    - Safari: [Download LiveReload 1.6.2 extension](https://github.com/downloads/mockko/livereload/LiveReload-1.6.2.safariextz) 
    - [Chrome](https://chrome.google.com/extensions/detail/jnihajbhpnppcggbcgedagnkighmdlei)
    - [Firefox](https://addons.mozilla.org/zh-TW/firefox/addon/livereload/)

若不想安裝瀏覽器外掛，可以直接在 HTML 中置入 livereload-js 如下：

    <script>document.write('<script src="http://'
    + (location.host || 'localhost').split(':')[0]
    + ':35729/livereload.js?snipver=1"></'
    + 'script>')</script>

LiveReload便會自動作用。

### History

![History](http://compass.kkbox.com/doc/preference-history.png)

點擊 "Clear History" 按鈕會清空最近使用的專案列表。

## Options
當專案被 "Watch" 時，可以使用 "Options" 選項來調整該專案之 CSS 輸出設定，如 CSS 格式及是否要包含標示來源行數的註解或除錯資訊等。

## 其他設定
另外有兩項無法在 "Preferences" 或 "Options" 中變更但可能需要調整的項目列出如下：

### 變更預設資料夾名稱
預設的 CSS 輸出資料夾名稱為 "stylesheet" ，若想變更此資料夾名稱，請修改 `config.rb` 的這個部分：

    css_dir = "stylesheets"
    
修改成自己想使用的資料夾名稱，例如：

    css_dir = "css"
    
存檔後，必須先停止 watch 該專案再重新 watch 一次，便會使用新設定做為 CSS 輸出資料夾的名稱。

若專案中有使用與 [image-url()](http://compass-style.org/reference/compass/helpers/urls/#image-url) 相關之 Compass helper ，但圖片資料夾名稱並非使用 "images" 時，必須更改 `config.rb` 中預設之圖片資料夾名稱才能正常作用：

    images_dir = "images"

### 將絕對路徑更改為相對路徑
當使用與 [image-url()](http://compass-style.org/reference/compass/helpers/urls/#image-url) 相關之 Compass helper 時， Compass.app 預設會在產出的 CSS 檔案中使用絕對路徑。若想更改為相對路徑時，需在 `config.rb` 中加入此行：

    relative_assets = true

**注意：每當變更 "config.rb" 之內容後都必須停止 watch 該專案再重新 watch 一次以確保新設定被套用。**

若想在其他專案中使用目前的專案設定，只要將 `config.rb` 複製至該專案資料夾即可。

## 在既有專案使用 Compass.app
若想使用 Compass.app 來編輯既有專案之 CSS ，需確認該專案資料夾包含：

* **sass 資料夾**: 至少必須有一個 `.scss` 或 `.sass` 檔案
* **config.rb**: 由其他 Compass.app 建立的專案複製即可，但需先確認所包含的設定是否符合所需

符合上述條件之資料夾即可被 watch 。

**注意：若只是想使用 Compass.app 預設設定來編譯 Sass 檔案，可以使用不需 config.rb 的 [Sass Mode](https://github.com/KKBOX/CompassApp/wiki/Sass-mode)**

要將改用 Sass 編輯專案之 CSS 時，最好能重新將 CSS 改寫。但若狀況不允許時由於 SCSS 語法為 CSS3 語法的 superset ，直接將 CSS 之副檔名 `.css` 更改為 `.scss` 即可，或在 SCSS 檔案中使用 `@import` 來載入舊檔案。

## SASS & Compass 參考資料

* [SASS](http://sass-lang.com/)
* [Compass](http://compass-style.org/)