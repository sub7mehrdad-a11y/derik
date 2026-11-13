# نقشه‌ی جهان نسخه‌ی ۵ و آیکون‌های نقشه (برای ChatGPT)

## چرا؟
نقشه‌ی ۴ (دور اول) به‌اندازه‌ی نقشه‌ی قبلی (`world-v3.webp`) خوب نبود: شهرها کوچک و پراکنده بودند و سبک عوض شده بود. این بار **نقشه‌ی قبلی همان‌طور که هست** مبنا است و فقط این چیزها به آن اضافه می‌شود: غرب دریای مدیترانه با کارتاژ، چند شهر خارجی و سه کاروانسرا. هر چیزی که روی نقشه دیده می‌شود را خودِ چت می‌کشد؛ من فقط جایش را می‌گذارم و هیچ آیکونی را خودم نمی‌سازم.

## ۱. نقشه
**فایل‌های ورودی که باید به چت بدهی:** `assets/world-v3.webp` (همان نقشه‌ی قبلی، مربع ۱۲۵۴×۱۲۵۴). همان تصویر را ضمیمه کن و بگو سبک و اندازه‌ی شهرها دقیقاً از آن باشد.

**کار:** بوم را به سمت چپ (غرب) ۵۰٪ بزرگ کن (outpaint/expand) تا نسبت تصویر دقیقاً ۳:۲ شود (مثلاً ۱۸۸۱×۱۲۵۴ و بعد ۴۰۹۶×۲۷۳۱). نقشه‌ی قبلی بدون تغییر در ۶۶٪ سمت راست می‌ماند؛ شهرهای سارد و بابل و شوش و پارسه و صور و باختر **همان نقاشی‌ها با همان اندازه** بمانند. ۳۴٪ سمت چپ تازه است.

### چه چیزی تازه کشیده شود
1. **غرب:** دریای مدیترانه‌ی غربی، ساحل شمال آفریقا و یک بندر بزرگ شبیه سبک شهرهای قبلی (کارتاژ، بندر گرد نظامی)، و یونان با شهر آتن (آکروپولیس). یونان در نقشه‌ی قبلی هم کوچک هست؛ اگر لازم شد کمی بزرگ‌تر شود.
2. **پانتیکاپایون:** بندر یونانی-سکایی در شمال دریای سیاه.
3. **گرها:** شهر سفید عرب‌ها در ساحل غرب خلیج فارس با نخل.
4. **پاتالی‌پوترا:** شهر چوب‌دیوار هندی کنار رود گنگ در دور شرق.
5. **سه کاروانسرا** با همان اندازه‌ی شهرهای کوچک قبلی (نه کوچک‌تر)، هرکدام یک نقاشی مستقل:
   - کاروانسرای خراسان: حیاط خشتی مربعی با دروازه، شتر و چادر، در فلات خشک شرق (بین شوش و باختر).
   - کاروانسرای کاپادوکیه: مثل بالا ولی در ارتفاعات سبز آناتولی (بین سارد و بابل).
   - بندرگاه کوچک ایسوس: اسکله‌ی سنگی با دو قایق و انبار، روی ساحل (بین سارد و صور).
6. راه‌ها: مسیر کم‌رنگ و خاکی راه شاهی (سارد ← کاپادوکیه ← بابل ← شوش)، راه شرق (شوش ← خراسان ← باختر)، راه ساحلی (صور ← ایسوس ← سارد). فقط یک رد کمرنگ، نه خط.

### جای تقریبی (درصد از چپ، درصد از بالای بوم تازه ۳:۲)
شهرهای قبلی (تقریباً جایی که در تصویر الان هستند، نباید جابه‌جا شوند): سارد ۴۳٪، ۳۶٪ · صور ۴۷٪، ۴۶٪ · بابل ۵۷٪، ۴۸٪ · شوش ۶۴٪، ۴۹٪ · پارسه ۷۲٪، ۵۶٪ · باختر ۸۱٪، ۳۸٪.

تازه‌ها (تقریبی؛ من بعد از دریافت خودم روی تصویر اندازه می‌گیرم، پس فقط ترتیب جغرافیایی درست باشد):
- کارتاژ ۱۰٪، ۴۴٪ (ساحل شمال آفریقا، دور غرب)
- آتن ۳۸٪، ۳۹٪
- پانتیکاپایون ۴۹٪، ۱۷٪
- گرها ۶۴٪، ۵۶٪
- پاتالی‌پوترا ۹۵٪، ۵۷٪
- کاروانسرای کاپادوکیه ۵۰٪، ۳۹٪ · ایسوس ۴۵٪، ۴۲٪ · خراسان ۷۸٪، ۵۰٪

### پرامپت
> Use the attached image "world-v3" as the exact base. Expand the canvas to the LEFT (west) by 50% so the final image is exactly 3:2, keeping everything in the original image completely unchanged in the right 66%: same painting style, same terrain, same large painted cities at the same size. Extend the western Mediterranean Sea, North Africa coast and Greece in the same hand-painted antique-atlas style (parchment atlas combined with a strategy-game map, soft volumetric light, warm sand-ochre, olive and lapis-blue palette). Add these painted places at the same scale as the existing cities: Carthage (round military harbour, far west on the African coast), Athens (Acropolis, Greece), Panticapaeum (Greek harbour town on the north coast of the Black Sea), Gerrha (white Arab port town with palms on the west shore of the Persian Gulf), Pataliputra (timber-walled Indian city on a wide river at the far east), and three roadside places painted as clearly as cities, not tiny: a mud-brick caravanserai courtyard with gate, camels and tents in the dry plateau between Susa and Bactra; the same in the green Anatolian highlands between Sardis and Babylon; and a small stone harbour with a pier, two moored boats and a warehouse on the coast between Sardis and Tyre. Draw a faint dusty trail along the Royal Road (Sardis, the Anatolian caravanserai, Babylon, Susa), the eastern road (Susa, the plateau caravanserai, Bactra) and the coast road (Tyre, the harbour, Sardis). NO text, NO labels, NO icons, NO compass, NO borders. Leave a little calm ground below each city for the game to print its name. Then output at the largest size available.

بعد از رسیدن تصویر، اگر چت فقط ۱۸۸۱×۱۲۵۴ داد مشکلی نیست؛ من خودم بزرگش و کاشی‌اش می‌کنم.

## ۲. آیکون‌های رابط که الان ایموجی‌اند و باید طراحی شوند
قواعد مشترک: همان سبک بسته‌ی رابط (برنز و طلا، لاجورد، رنگ‌های گرم، قاب باستانی هخامنشی)، **بدون متن و عدد**، شفاف، WebP، ۹۶×۹۶ (جز مواردی که نوشته شده)، هرکدام زیر ۱۰ کیلوبایت. مسیر: `ui/icon/`.

برای «دکان من» (خلاصه‌ی مالی):
1. `coin.webp` صندوق (سکه‌ی دریک)  2. `networth.webp` ثروت خالص (ترازو یا نمودار رو به بالا روی لوح)  3. `stock.webp` موجودی انبار (کیسه و کوزه)  4. `caravan.webp` کاروان (شتر با بار)  5. `house.webp` خانه  6. `deposit.webp` سپرده (صندوقچه‌ی برنزی)  7. `debt.webp` بدهی (لوح گلی با مهر قرمز)  8. `farm.webp` زمین و کارگاه (خوشه‌ی گندم و چکش)

برای شهر و کاروانسرا:
9. `market.webp` بازار (غرفه با پارچه‌ی راه‌راه)  10. `bourse.webp` بورس تاجران (دو دست در حال دست‌دادن روی لوح)  11. `lock.webp` قفل برنزی (شهر قفل‌شده، ۶۴×۶۴)  12. `home-star.webp` ستاره‌ی شهر خانگی (ستاره‌ی هشت‌پر زرین، ۶۴×۶۴)  13. `host.webp` صاحب کاروانسرا (پرتره‌ی گرد یا نماد جام و چراغ)

برای تاجران بورس:
14. چهار پرتره‌ی تاجر، ۵۱۲×۵۱۲ با قاب گرد، سبک پرتره‌های قبلی (`ui/people/`): `trader-persian.webp` (پارسی)، `trader-greek.webp` (یونانی)، `trader-semitic.webp` (بابلی یا فنیقی)، `trader-sogdian.webp` (سغدی یا سکایی). من آن‌ها را بین ۲۰ نام پخش می‌کنم.

پرامپت نمونه (برای هر ردیف نام و ابعاد را جایگزین کن):
> A small UI icon for a game, hand-painted ancient Achaemenid Persian style: bronze and gold with lapis accents, warm muted palette, thin dark outline, subtle shading. Subject: {موضوع}. Exactly {96×96} pixels, transparent background, centered with a little padding, NO text, NO numbers, NO letters. Consistent with the existing Derik UI pack (HUD, tabs, buttons).

## ۳. بعد از رسیدن فایل‌ها من چه می‌کنم
نقشه را جایگزین می‌کنم، شهرها و کاروانسراها را روی جای واقعی‌شان می‌گذارم، کاشی‌بندی می‌کنم و همه‌ی ایموجی‌های رابط را با آیکون‌های تازه عوض می‌کنم. تا آن موقع نقشه‌ی قبلی (v3) فعال است و کاروانسراها و شهرهای خارجی از بازی پنهان‌اند.
