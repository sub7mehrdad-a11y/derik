# طرح نسخه‌ی ۴: نقشه‌ی بزرگ‌تر، شهرهای خارجی، کاروانسراها

## ۱. یک نقشه‌ی بزرگ یا چند نقشه‌ی کوچک؟
**پیشنهاد: یک نقشه‌ی بزرگ، که من برای سرعت آن را به کاشی (tile) خرد می‌کنم.**

- چند نقشه‌ی کوچک یعنی بازیکن هر بار صفحه عوض کند و کاروان‌ها از مرز نقشه‌ها رد شوند. این با حس «جهان یکپارچه و کاروان در حال سفر» نمی‌خواند و کد مسیر و کاروان را پیچیده می‌کند.
- لگ از اندازه‌ی تصویر نیست، از رمزگشایی یک تصویر خیلی بزرگ و بازرسم‌شدن مدام آن است. راه حلش این است که من تصویر نهایی را به کاشی‌های ۱۰۲۴ پیکسلی ببُرم (مثلاً ۴×۳) و فقط کاشی‌هایی که روی صفحه‌اند بارگذاری شوند. در این حالت یک نقشه‌ی ۴۰۹۶×۲۷۳۱ روی گوشی روان است.
- چون ChatGPT تصویر خیلی بزرگ نمی‌دهد: اول یک تصویر ۳:۲ از کل نقشه می‌سازی، بعد با همان روش «expand» که برای شوش کردی، دو بار بزرگش می‌کنیم. من آخرِ کار با کاشی‌بندی تکمیلش می‌کنم.

## ۲. گستره‌ی نقشه
نسبت تصویر دقیقاً ۳:۲. از غرب مدیترانه (کارتاژ) تا هند (پاتالی‌پوترا)، از دریای سیاه (شمال) تا جنوب خلیج فارس. فاصله‌ی شمال-جنوب عمداً کشیده شده تا شهرها از هم جدا بمانند و در بازی جا بدهند.

### مختصات (درصد از چپ، درصد از بالا)
داخل امپراطوری:
- سارد ۲۵٪ ، ۴۰٪ · صور ۳۴٪ ، ۵۵٪ · بابل ۴۶٪ ، ۵۷٪ · شوش ۵۰٪ ، ۵۸٪ · پارسه ۵۶٪ ، ۶۵٪ · باختر ۷۴٪ ، ۴۵٪

شهرهای خارج از امپراطوری (۵ تا):
- آتن (یونان): ۱۹٪ ، ۴۲٪، در غرب دریای اژه
- کارتاژ: ۳٪ ، ۴۵٪، ساحل شمال آفریقا در دورِ غرب مدیترانه
- پانتیکاپایون (بندر یونانی-سکایی در شمال دریای سیاه): ۳۶٪ ، ۲۰٪
- گرها (بندر عرب‌ها در جنوب خلیج فارس): ۵۲٪ ، ۷۴٪
- پاتالی‌پوترا (هند، کنار گنگ): ۹۶٪ ، ۷۸٪

کاروانسراها (۳ تا، شهر نیستند):
- کاروانسرای خراسان: ۶۱٪ ، ۵۰٪ (جاده‌ی شوش و پارسه به باختر)
- کاروانسرای کاپادوکیه: ۴۱٪ ، ۴۰٪ (جاده‌ی بابل به سارد)
- بندرگاه کوچک ایسوس: ۳۵٪ ، ۴۵٪ (ساحل، جاده‌ی صور به سارد)

---

## ۳. پرامپت نقشه (برای ChatGPT)

A hand-painted, top-down illustrated game world map of the ancient Near East and its neighbours around 500 BC, in the same style as the previous Derik world map: antique parchment atlas combined with a modern strategy-game map, painted miniature terrain, soft volumetric lighting, warm muted palette (sand ochre, olive, terracotta, lapis-blue water, aged-paper vignette at the edges). Aspect ratio exactly 3:2 (e.g. 1536×1024), highest resolution available. NO text, NO labels, NO icons, NO compass, NO borders, NO UI. Leave about 6% of calm, uncluttered ground around every city position listed below, because the game draws names and markers itself.

Geography (positions are % from left, % from top):
- The western Mediterranean Sea along the left edge, with the coast of North Africa at the bottom-left (Carthage region near (3%, 45%) on a small peninsula), Greece with the Aegean Sea around (15–22%, 38–46%), Anatolia as a large highland plateau at (22–45%, 30–45%).
- The Black Sea at the top (30–45%, 5–25%), Crimea peninsula near (36%, 20%) with a small Greek harbour town.
- The Levant coast near (34%, 55%) with an island port city, the Nile delta and desert at the bottom-left (20–32%, 62–80%).
- The Tigris and Euphrates as two parallel blue ribbons from the Anatolian mountains down to the Persian Gulf, with a fertile green plain between them around (46%, 57%).
- Zagros mountains diagonal at (52–62%, 50–66%); the Iranian plateau as a dry brown highland at (56–74%, 40–60%); Hindu Kush snow-capped mountains at (72–86%, 30–48%).
- The Persian Gulf at the bottom centre (48–62%, 66–82%) with the Arabian peninsula below it, arid desert with a small port town on the gulf shore near (52%, 74%).
- The Arabian Sea at the bottom-right, India at the far right with the Indus valley around (82–90%, 55–72%) and a broad green river plain (the Ganges) around (96%, 78%) with a large city.
- A thin Caspian Sea sliver near (62–70%, 20–32%).

City positions (settlements to paint, each with distinct architecture):
- Sardis (25%, 40%) Lydian hill city with a citadel; Athens (19%, 42%) with the Acropolis; Tyre (34%, 55%) island harbour city; Babylon (46%, 57%) with the ziggurat and Ishtar Gate; Susa (50%, 58%) palace city; Persepolis (56%, 65%) terrace on a mountain slope; Bactra (74%, 45%) walled oasis city at the foot of snow mountains; Carthage (3%, 45%) harbour city with a round military port; Panticapaeum (36%, 20%) Greek harbour town; Gerrha (52%, 74%) white Arab port town with palm trees; Pataliputra (96%, 78%) timber-walled Indian city on a wide river.
- Three small roadside places (not cities, just a walled caravanserai courtyard with a few camels and tents, painted small): at (61%, 50%) in the dry plateau; at (41%, 40%) in the Anatolian highlands; and a tiny coastal harbour with a stone pier and two moored boats at (35%, 45%).

Include the Royal Road as a faint dusty trail from Sardis through (41%, 40%), Babylon and Susa, plus a faint trail from Susa and Persepolis towards Bactra passing (61%, 50%), and a coast trail from Tyre to Sardis passing (35%, 45%). Sea lanes: no markings.

---

## ۴. تصویر کاروانسرا (۳ فایل، ۱۰۲۴×۶۸۴ شفاف، مثل ساختمان‌ها)
- `assets/b/caravanserai.webp`: حیاط مربعی با دیوار خشتی، دروازه‌ی بزرگ، شتر و چادر، چاه آب و چند تاجر.
- `assets/b/caravan-port.webp`: بندرگاه کوچک، اسکله‌ی سنگی، دو قایق بادبانی، انبار کالا.
- یک نسخه‌ی «نمای داخل» برای پس‌زمینه‌ی صفحه‌ی بورس: ۱۰۲۴×۶۸۴، حیاط شلوغ کاروانسرا، میزهای معامله و آتش.

## ۵. تاجران کاروانسرا (۲۰ نام فرضی)
هر تاجر یک نام و یک تخصص دارد؛ در هر توقف ۵ یا ۶ نفرشان به‌تصادف می‌آیند و هرکدام از کالاهای خودش می‌فروشد و کالاهای دیگر را می‌خرد.

۱. بهرام سغدی (پشم) · ۲. هیدارنس بابلی (غلات) · ۳. آریامن لیدیایی (شراب) · ۴. تیرداد ماد (منسوجات) · ۵. نیکاندر یونانی (شراب و روغن) · ۶. شمشا‌ی سوری (سدر) · ۷. ارتخشت پارسی (فلز) · ۸. مهرپاد باختری (لاجورد) · ۹. بغیا (پشم) · ۱۰. ایلی‌ملکو فنیقی (ارغوان) · ۱۱. دادارشیش (غلات) · ۱۲. زروان کرمانی (خرما) · ۱۳. اسپنتا (منسوجات) · ۱۴. کامبوجیه نخجیر (شراب) · ۱۵. باروخ بابلی (فلز) · ۱۶. اوخشت (پشم) · ۱۷. سیاوش سکایی (غلات) · ۱۸. تمیریس (منسوجات) · ۱۹. ارشام آرامی (کالای متفرقه) · ۲۰. گاومات کرد (فلز و سدر).

## ۶. چطور بازی کار کند
- **مسیر:** کاروانی که روی یکی از این سه مسیر می‌رود، از کاروانسرای وسط راه رد می‌شود و می‌تواند «توقف» کند (انتخاب بازیکن، یا خودکار در مسیر خودکار).
- **بازار کاروانسرا:** هر بار رسیدن، ۵ تا ۶ تاجر تصادفی با موجودی کالا ظاهر می‌شوند. بازیکن مستقیم با هر تاجر معامله می‌کند (خرید یا فروش به قیمت توافقی، در بازه‌ی ±۱۵٪ قیمت بازار). مثل یک بورس کوچک است: قیمت‌ها از هم فرق دارند و فرصت سود هست.
- **صاحب کاروانسرا:** برای پذیرایی از مهمان‌ها همیشه می‌خرد: پشم، منسوجات، شراب و غلات، با قیمت ثابت و کمی کمتر از بازار. این خروجی مطمئن برای بار اضافه است.
- **اقلام ضروری:** غذا و آب و علوفه هم‌جا موجودند؛ کاروان در توقف یک روز استراحت می‌کند و خطر راهزنی همان روز صفر است. (جایزه‌ی کم‌خطر برای توقف.)
- **شهرهای خارجی:** برای معامله با آن‌ها باید رتبه‌ی «تاجر بین‌المللی» (رتبه‌ی ۴ فعلی «صاحب تجارت‌خانه» را به این نام تغییر می‌دهیم) داشته باشی. هر شهر خارجی کالای خاص و انحصاری دارد:
  - آتن: روغن زیتون، سفال، نقره
  - کارتاژ: قلع، عاج، ارغوان
  - پانتیکاپایون: خز، ماهی خشک، طلای سکایی، گندم
  - گرها: کندر، مُر، مروارید
  - پاتالی‌پوترا: ادویه، عاج، پنبه، جواهر
  به شهر خارجی با کاروان زمینی یا دریایی می‌رسی؛ فاصله‌ها بلند است و سود بالا.
- **عوارض:** شهر خارجی عوارض ندارد، ولی راه‌ها خطرناک‌ترند. بازیکن تصمیم می‌گیرد ریسک کند یا نه.

## ۷. پیشنهادهای دیگر برای جذاب‌تر شدن (به ترتیب اولویت)
۱. **ماموریت‌های تاجران:** هر تاجر در کاروانسرا ماموریت کوچک می‌دهد («۱۰ بار پشم به بابل برسان») با پاداش اعتبار یا بخشودگی عوارض، نه پول مفت.
۲. **اخبار و شایعات بازار:** یک بخش «اخبار بازار» که خبر قیمت آینده‌ی شهرها را بدهد (گاهی درست، گاهی نه). بازیکن با گوش‌دادن به خبر سود می‌برد.
۳. **دفترچه‌ی قیمت:** نمودار ساده‌ی قیمت هر کالا در هر شهر در ۳۰ روز گذشته. حس تحلیلگر بازار می‌دهد و بازیکن را به بازی برمی‌گرداند.
۴. **محافظان و فرمانده‌ی کاروان:** می‌توان برای هر کاروان فرمانده استخدام کرد که یک مهارت دارد (کم‌خطر، سریع‌تر، ظرفیت بیشتر) و با تجربه پیشرفت می‌کند.
۵. **کتابخانه‌ی کالاها:** هر کالای نو که اولین بار می‌خری یا می‌فروشی، در یک کتابخانه با تصویر و توضیح تاریخی ثبت می‌شود. جمع‌کردنش انگیزه است.
۶. **انجمن بازرگانان:** عضویت در انجمن شهر (با اعتبار کافی) که تخفیف عوارض و خبر زودتر می‌دهد.
۷. **فصل‌ها و جشن‌های ایرانی:** نوروز، مهرگان، تیرگان با قیمت‌های ویژه (بازار نوروز پر از منسوجات).
