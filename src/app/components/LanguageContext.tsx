import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "ru";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  setLang: () => {},
  t: (key: string) => key,
});

export function useLanguage() {
  return useContext(LanguageContext);
}

const translations: Record<string, Record<Lang, string>> = {
  // Masthead
  "masthead.est": { en: "Est. 2026 by Ori", ru: "Осн. 2026 Ори" },
  "masthead.edition": { en: "Special Birthday Edition", ru: "Спецвыпуск ко Дню Рождения" },
  "masthead.price": { en: "Price: Free (Ori chewed the paywall)", ru: "Цена: Бесплатно (Ори сгрыз подписку)" },
  "masthead.title": { en: "The Daily Woof", ru: "Дейли Гав" },
  "masthead.tagline": { en: "All the News That's Fit to Bark", ru: "Все новости, достойные гавканья" },
  "masthead.date": { en: "Monday, March 16, 2026", ru: "Понедельник, 16 марта 2026" },
  "masthead.vol": { en: "Vol. I, No. 1", ru: "Том I, № 1" },
  "masthead.location": { en: "Warsaw, Poland", ru: "Варшава, Польша" },

  // Hero Headline
  "hero.breaking": { en: "Breaking News", ru: "Срочные новости" },
  "hero.headline_pre": { en: "Local Woman Turns ", ru: "Местная женщина отмечает " },
  "hero.headline_post": { en: ", Remains Suspiciously Youthful", ru: " и остаётся подозрительно молодой" },
  "hero.classified": { en: "Classified", ru: "Засекречено" },
  "hero.reclassify": { en: "Click to re-classify", ru: "Нажмите, чтобы засекретить" },
  "hero.declassify": { en: "Click to declassify", ru: "Нажмите, чтобы рассекретить" },
  "hero.leaked": {
    en: "* This classified information was leaked by Ori (Editor-in-Chief). The Daily Woof accepts no responsibility.",
    ru: "* Эта секретная информация была слита Ори (главным редактором). Дейли Гав не несёт ответственности.",
  },
  "hero.sub": {
    en: "Party of 7 summoned to Chinese restaurant for mandatory celebration; sources confirm dumplings are involved. Resistance is futile.",
    ru: "Группа из 7 человек вызвана в китайский ресторан на обязательное празднование; источники подтверждают участие пельменей. Сопротивление бесполезно.",
  },

  // Lead Story
  "lead.section": { en: "The Lead Story", ru: "Главная статья" },
  "lead.p1": {
    en: "Ok so I am not normally the one doing the writing around here because I am a dog and my paws are too big for the keyboard, but today is a heckin important day and I have things to say. My favoritest hooman in the whole entire world, Alla, has done 26 trips around the big sky ball. That is like... 182 in dog years?? I am not good at math but I know it is a lot of trips and she still looks heckin amazing.",
    ru: "к так ладна, обычно я тут не пишу, потому что я собакен и мои лапы слишком большие для клавиатуры, но сегодня оч важный день и мне есть что сказать. Мой самый любимый хуман во всём мире, Алла, совершила 26 кругов вокруг большого светящегося шарика в небе. Это типа... 182 в собачьих годах?? Я плохо считаю, но знаю что это много кругов и она всё ещё выглядит обалденно.",
  },
  "lead.fig1": {
    en: "Fig. 1 — Da birthday hooman and her most handsomest editor-in-chief. We r a very good team.",
    ru: "Рис. 1 — Именинница и её самый красивый главный редактор. Мы очень хорошая команда.",
  },
  "lead.p2": {
    en: "I want to tell you what it is like living with Alla because I think the hoomans do not appreciate her enough (except maybe Tianen, he does a pretty good job, I give him 12/10). Every single day she comes home and the whole house gets better. I can hear her footsteps from very far away and my tail starts going and it does not stop. She is the kind of hooman who makes everything feel safe and warm, like a big soft blanket but in person form.",
    ru: "Я хочу рассказать вам каково это — жить с Аллой, потому что я думаю хуманы её недостаточно ценят (ну кроме может Тианена, он неплохо справляется, ставлю ему 12/10). Каждый день она приходит домой и весь дом становится лучше. Я слышу её шаги издалека и мой хвост начинает вертеться и не останавливается. Она такой хуман, который делает всё безопасным и тёплым, как большое мягкое одеялко, но в форме человека.",
  },
  "lead.p3": {
    en: "She does a heckin good job at existing. Like, she is funny — sometimes she laughs and it is the best sound, even better than the treat bag crinkling (and that is saying A LOT). She is kind to every single person and also to me, which is the most important part obviously. When she sits on the couch I always make sure to sit next to her because that is the best spot in the house. It is scientifically proven. I did the research myself.",
    ru: "Она обалденно хорошо справляется с существованием. Типа, она смешная — иногда она смеётся и это лучший звук, даже лучше чем шуршание пакета с вкусняшками (а это о МНОГОМ говорит). Она добрая к каждому человеку и ко мне тоже, что очевидно самое важное. Когда она садится на диван, я всегда сажусь рядом, потому что это лучшее место в доме. Это научно доказано. Я сам провёл исследование.",
  },
  "lead.p4": {
    en: "Tonight she is going to a big fancy dinner with her whole pack — mama Alina and papa Dima, her littermates Andrew, Eva, and Phill, and of course Tianen who has been doing a heckin stress about the reservation for like two weeks now. I am not invited because apparently dogs are \"not allowed in restaurants\" which is discrimination but I am not going to make this about me. This is Alla's day.",
    ru: "Сегодня вечером она идёт на большой шикарный ужин со всей своей стаей — мама Алина и папа Дима, её однопомётники Андрей, Ева и Филл, и конечно Тианен, который уже две недели жутко стрессует из-за бронирования. Меня не пригласили, потому что типа собакам «нельзя в рестораны», что является дискриминацией, но я не буду делать этот день про себя. Это день Аллы.",
  },
  "lead.p5": {
    en: "So here is what I want to say to my hooman on her borkday: thank u for every belly rub, every \"good boy,\" every time u let me sneak onto the bed when Tianen is not looking. Thank u for being the heart of this whole family. The world got so much better 26 years ago and I am just a dog but even I can see that.",
    ru: "Вот что я хочу сказать моему хуману в её гавкодень: спасибо за каждое почёсывание пузика, каждое «хороший мальчик», каждый раз когда ты разрешаешь мне залезть на кровать пока Тианен не смотрит. Спасибо что ты сердце этой семьи. Мир стал намного лучше 26 лет назад и я просто собакен, но даже я это вижу.",
  },
  "lead.p6": {
    en: "Happy borkday, Alla. U deserve all the treats. ALL of them.",
    ru: "С гавкоднём, Алла. Ты заслуживаешь все вкусняшки. ВСЕ.",
  },
  "lead.byline": {
    en: "— Dis has been an editorial by Ori, Editor-in-Chief and Very Good Boy. Written with paws and love. Bork bork.",
    ru: "— Это была редакционная статья Ори, главного редактора и Очень Хорошего Мальчика. Написано лапами и с любовью. Гав гав.",
  },

  // Dinner Briefing
  "dinner.developing": { en: "Developing Story", ru: "Развивающаяся история" },
  "dinner.headline": {
    en: "Family of 7 to Descend Upon Local Chinese Restaurant",
    ru: "Семья из 7 человек нагрянет в местный китайский ресторан",
  },
  "dinner.sub": {
    en: "Authorities have been notified. Extra dumplings have been prepared.",
    ru: "Власти уведомлены. Дополнительные пельмени подготовлены.",
  },
  "dinner.fig2": {
    en: "Fig. 2 — The scene of the upcoming celebration (stock photo; actual restaurant may contain more birthday joy).",
    ru: "Рис. 2 — Место предстоящего празднования (фото из архива; в реальном ресторане может быть ещё больше праздничной радости).",
  },
  "dinner.venue_label": { en: "Venue", ru: "Место" },
  "dinner.venue": { en: "Restauracja chinska Xinglong", ru: "Restauracja chinska Xinglong" },
  "dinner.location_label": { en: "Location", ru: "Адрес" },
  "dinner.location": { en: "Wesola 28, 05-552 Wolka Kosowska", ru: "Wesola 28, 05-552 Wolka Kosowska" },
  "dinner.date_label": { en: "Date", ru: "Дата" },
  "dinner.date": { en: "Saturday, March 15, 2026", ru: "Суббота, 15 марта 2026" },
  "dinner.time_label": { en: "Time", ru: "Время" },
  "dinner.time": { en: "18:00 (6:00 PM)", ru: "18:00" },
  "dinner.dresscode": {
    en: "<strong>Dress code:</strong> Smart casual. No, your favorite hoodie does not count. Yes, we are looking at you, Phill.",
    ru: "<strong>Дресс-код:</strong> Смарт-кэжуал. Нет, твоя любимая толстовка не считается. Да, Филл, это тебе.",
  },

  // Secret Menu
  "menu.section": { en: "Leaked Documents", ru: "Утечка документов" },
  "menu.topsecret": { en: "TOP SECRET", ru: "СОВЕРШЕННО СЕКРЕТНО" },
  "menu.classified_stamp": { en: "CLASSIFIED", ru: "ЗАСЕКРЕЧЕНО" },
  "menu.title": { en: "THE MENU — Operation Birthday Feast", ru: "МЕНЮ — Операция Праздничный Пир" },
  "menu.intro": {
    en: "The following document was obtained by The Daily Woof through investigative journalism (Ori sniffed Tianen's phone). Dishes are subject to change based on availability and Alla's mood.",
    ru: "Следующий документ был получен Дейли Гав путём журналистского расследования (Ори обнюхал телефон Тианена). Блюда могут измениться в зависимости от наличия и настроения Аллы.",
  },
  "menu.declassify": { en: "DECLASSIFY MENU", ru: "РАССЕКРЕТИТЬ МЕНЮ" },
  "menu.fig3": {
    en: "Fig. 3 — Visual intelligence of the expected feast. Drooling is permitted.",
    ru: "Рис. 3 — Визуальная разведка ожидаемого пиршества. Слюноотделение разрешено.",
  },
  "menu.notice": {
    en: "NOTICE: Menu items may be modified. The Birthday Queen has final veto power.",
    ru: "ВНИМАНИЕ: Меню может быть изменено. Именинница имеет право финального вето.",
  },
  // Menu items
  "menu.item1.name": { en: "Corn Soup (玉米羹)", ru: "Кукурузный суп (玉米羹)" },
  "menu.item1.comment": {
    en: "Warm, golden, heckin comforting. The perfect opening move for a birthday feast.",
    ru: "Тёплый, золотистый, невероятно уютный. Идеальное начало праздничного ужина.",
  },
  "menu.item2.name": { en: "Chongqing Spicy Chicken (重庆辣子鸡)", ru: "Чунцинская острая курица (重庆辣子鸡)" },
  "menu.item2.comment": {
    en: "So many chili peppers it looks like a crime scene. Deliciously dangerous.",
    ru: "Столько перцев, что похоже на место преступления. Восхитительно опасно.",
  },
  "menu.item3.name": { en: "Crispy Chicken (香酥鸡)", ru: "Хрустящая курица (香酥鸡)" },
  "menu.item3.comment": {
    en: "The CRONCH heard round the table. Ori's ears perk up every single time.",
    ru: "ХРУСТ, слышный на весь стол. Ори каждый раз поднимает уши.",
  },
  "menu.item4.name": { en: "Sweet & Sour Pork Tenderloin (糖醋里脊)", ru: "Свинина в кисло-сладком соусе (糖醋里脊)" },
  "menu.item4.comment": {
    en: "Sweet. Sour. Crunchy. The holy trinity of making hoomans do the happy chew.",
    ru: "Сладкое. Кислое. Хрустящее. Святая троица, от которой хуманы жуют с блаженством.",
  },
  "menu.item5.name": { en: "Twice-Cooked Pork (回锅肉)", ru: "Свинина двойной обжарки (回锅肉)" },
  "menu.item5.comment": {
    en: "They cooked it TWICE. That is double the love. This is big brain hooman energy.",
    ru: "Её приготовили ДВАЖДЫ. Это двойная порция любви. Хуманы — гении.",
  },
  "menu.item6.name": { en: "Fried Spare Ribs (炸排骨)", ru: "Жареные рёбрышки (炸排骨)" },
  "menu.item6.comment": {
    en: "Bones?? BONES. Ori's official position: extremely interested. Very alert.",
    ru: "Косточки?? КОСТОЧКИ. Официальная позиция Ори: крайне заинтересован. Очень бдителен.",
  },
  "menu.item7.name": { en: "Crystal Shrimp Dumplings (水晶虾饺)", ru: "Хрустальные креветочные пельмени (水晶虾饺)" },
  "menu.item7.comment": {
    en: "See-through lil parcels of joy. Like tiny edible presents. It is still a birthday, after all.",
    ru: "Прозрачные маленькие свёртки радости. Как крошечные съедобные подарки.",
  },
  "menu.item8.name": { en: "Beef with Bamboo Shoots & Mushrooms (双冬牛肉)", ru: "Говядина с побегами бамбука и грибами (双冬牛肉)" },
  "menu.item8.comment": {
    en: "Beef AND mushrooms?? Ori is shaking with excitement. Two winters of flavor in one dish. Very sophisticated. Much umami.",
    ru: "Говядина И грибы?? Ори трясётся от восторга. Два зимних вкуса в одном блюде. Очень изысканно. Много умами.",
  },
  "menu.item9.name": { en: "Garlic Vermicelli Enoki Mushrooms (蒜蓉粉丝金针菇)", ru: "Грибы эноки с чесноком и фунчозой (蒜蓉粉丝金针菇)" },
  "menu.item9.comment": {
    en: "Fancy noodles on tiny mushrooms. Smells like garlic heaven. Ori can confirm — sniffed from across the room.",
    ru: "Модная лапша на маленьких грибах. Пахнет чесночным раем. Ори подтверждает — учуял через всю комнату.",
  },
  "menu.item10.name": { en: "Garlic Asparagus (蒜蓉芦笋)", ru: "Спаржа с чесноком (蒜蓉芦笋)" },
  "menu.item10.comment": {
    en: "The green veggie that makes hoomans feel healthy while surrounded by fried everything. Respect.",
    ru: "Зелёный овощ, благодаря которому хуманы чувствуют себя здоровыми среди всего жареного. Уважение.",
  },
  "menu.item11.name": { en: "Crispy Milk (脆皮牛奶)", ru: "Хрустящее молоко (脆皮牛奶)" },
  "menu.item11.comment": {
    en: "They fried MILK. Hoomans are the most brilliant species on this planet. After dogs.",
    ru: "Они пожарили МОЛОКО. Хуманы — самый гениальный вид на планете. После собак.",
  },
  "menu.item12.name": { en: "Large Rice (米饭大份)", ru: "Рис большая порция (米饭大份)" },
  "menu.item12.comment": {
    en: "EDITOR'S WARNING: Do NOT fill up on rice. We repeat: do NOT fill up on rice.",
    ru: "ВНИМАНИЕ РЕДАКЦИИ: НЕ наедайтесь рисом. Повторяем: НЕ наедайтесь рисом.",
  },
  "menu.item13.name": { en: "Large Pitcher of Draft Beer (大壶生啤)", ru: "Большой кувшин разливного пива (大壶生啤)" },
  "menu.item13.comment": {
    en: "A big jug of the bubbly water that makes hoomans laugh louder. Ori has questions but no complaints.",
    ru: "Большой кувшин пузырчатой воды, от которой хуманы смеются громче. У Ори есть вопросы, но нет жалоб.",
  },
  "menu.item14.name": { en: "Fried Sesame Balls (炸麻球)", ru: "Жареные кунжутные шарики (炸麻球)" },
  "menu.item14.comment": {
    en: "Round, golden, sesame-coated orbs of happiness. The perfect grand finale. Happy borkday, Alla!",
    ru: "Круглые, золотые, покрытые кунжутом шарики счастья. Идеальный финал. С днём гавканья, Алла!",
  },

  // Persons of Interest
  "poi.section": { en: "Persons of Interest", ru: "Подозреваемые лица" },
  "poi.intro": {
    en: "The Daily Woof has compiled dossiers on all known attendees of tonight's operation. If you spot any of these individuals, wish them a good evening.",
    ru: "Дейли Гав составил досье на всех известных участников сегодняшней операции. Если вы заметите кого-либо из этих лиц, пожелайте им приятного вечера.",
  },
  "poi.alla.title": { en: "The Birthday Queen", ru: "Именинница-Королева" },
  "poi.alla.desc": {
    en: "Wanted for: being impossible to shop for, having impeccable taste, and making everyone feel loved. Armed with strong dumpling opinions. Approach with cake.",
    ru: "Разыскивается за: невозможность подобрать подарок, безупречный вкус и умение дарить любовь каждому. Вооружена сильным мнением о пельменях. Подходить с тортом.",
  },
  "poi.tianen.title": { en: "Chief Celebration Officer & Financial Sponsor", ru: "Главный по празднованию и финансовый спонсор" },
  "poi.tianen.desc": {
    en: "Known aliases: \"The Guy Who's Paying.\" Currently wanted for organizing this entire operation and getting emotional about it. Last seen arguing with a restaurant booking system.",
    ru: "Известные псевдонимы: \"Тот, кто платит.\" В данный момент разыскивается за организацию всей операции и чрезмерную эмоциональность. Последний раз замечен в споре с системой бронирования ресторана.",
  },
  "poi.dima.title": { en: "Senior Birthday Advisor", ru: "Старший советник по дням рождения" },
  "poi.dima.desc": {
    en: "Reliable source of birthday cheer. Known to give heartfelt toasts that make everyone cry. Smells like safety and dad energy. 10/10 would bork for.",
    ru: "Надёжный источник праздничного настроения. Известен душевными тостами, от которых все плачут. Пахнет безопасностью и папиной энергией. 10 из 10 — гавкнул бы за него.",
  },
  "poi.alina.title": { en: "Director of Birthday Intelligence", ru: "Директор праздничной разведки" },
  "poi.alina.desc": {
    en: "The organizational backbone of the group. If there is a plan, she knows about it. If there is no plan, she will make one. Extremely dangerous levels of competence.",
    ru: "Организационный костяк группы. Если есть план — она о нём знает. Если плана нет — она его составит. Крайне опасный уровень компетентности.",
  },
  "poi.andrew.title": { en: "Chief Dumpling Consumption Officer", ru: "Главный по поеданию пельменей" },
  "poi.andrew.desc": {
    en: "Certified good boi of the sibling pack. Always down for an adventure and never says no to extra snacks. Has been observed sneaking food under the table to yours truly. A true fren.",
    ru: "Сертифицированный хороший бой из братско-сестринской стаи. Всегда готов к приключениям и никогда не откажется от добавки. Был замечен за передачей еды под столом вашему покорному. Настоящий френ.",
  },
  "poi.evelina.title": { en: "Head of Morale & Good Vibes", ru: "Начальник морального духа и хорошего настроения" },
  "poi.evelina.desc": {
    en: "Responsible for ensuring the fun levels remain dangerously high. Alla's little sister and certified cuddle buddy. Radiates warmth and sweetness that even a dog can sense. Very trustworthy hooman.",
    ru: "Отвечает за поддержание опасно высокого уровня веселья. Младшая сестрёнка Аллы и сертифицированный обнимашечный напарник. Излучает тепло и нежность, которые даже пёс чувствует. Очень надёжный хуман.",
  },
  "poi.phill.title": { en: "Minister of Sweet & Sour Affairs", ru: "Министр кисло-сладких дел" },
  "poi.phill.desc": {
    en: "Contributed to this publication by eating snacks nearby. Smallest member of the pack but has the loudest opinions about dessert. Sweet & Sour Pork enthusiast. Under close surveillance.",
    ru: "Внёс вклад в эту публикацию, поедая снеки поблизости. Самый маленький член стаи, но с самым громким мнением о десерте. Фанат свинины в кисло-сладком соусе. Под пристальным наблюдением.",
  },
  "poi.ori.title": { en: "Editor-in-Chief", ru: "Главный редактор" },
  "poi.ori.desc": {
    en: "A very good boy. Leaked classified age information. Sniffed Tianen's phone for menu intel. Cannot attend dinner but sends birthday woofs. Will be waiting by the door.",
    ru: "Очень хороший мальчик. Слил секретную информацию о возрасте. Обнюхал телефон Тианена для получения данных о меню. Не может прийти на ужин, но шлёт праздничное \"гав\". Будет ждать у двери.",
  },

  // Weather Sidebar
  "weather.forecast": { en: "Tonight's Forecast", ru: "Прогноз на вечер" },
  "weather.cake": { en: "100% chance of good food", ru: "100% вероятность вкусной еды" },
  "weather.compliments": {
    en: "Scattered compliments with emotional toasts likely toward evening",
    ru: "Рассеянные комплименты с эмоциональными тостами ближе к вечеру",
  },
  "weather.funindex": { en: "Birthday Fun Index: Off the charts", ru: "Индекс праздничного веселья: Зашкаливает" },
  "weather.horoscope": { en: "Ori's Horoscope Corner", ru: "Уголок гороскопа от Ори" },
  "weather.horoscope_text": {
    en: "<strong>Pisces (March 16):</strong> The stars are aligned in your favor today. Your family will shower you with love, food, and possibly questionable birthday cards. Lucky numbers: 26. Lucky food: all of them. The universe says you deserve extra dessert. Ori agrees. Woof.",
    ru: "<strong>Рыбы (16 марта):</strong> Звёзды сегодня на вашей стороне. Ваша семья осыплет вас любовью, едой и, возможно, сомнительными открытками. Счастливые числа: 26. Счастливая еда: вся. Вселенная говорит, что вы заслуживаете дополнительный десерт. Ори согласен. Гав.",
  },
  "weather.classifieds": { en: "Classifieds & Notices", ru: "Объявления" },
  "weather.lost": {
    en: "<strong>LOST:</strong> Tianen's composure while planning this dinner. If found, please return.",
    ru: "<strong>ПОТЕРЯНО:</strong> Самообладание Тианена при планировании ужина. Нашедшего просим вернуть.",
  },
  "weather.wanted": {
    en: "<strong>WANTED:</strong> More evenings like this one. With this family. At any restaurant. Forever.",
    ru: "<strong>РАЗЫСКИВАЕТСЯ:</strong> Больше таких вечеров. С этой семьёй. В любом ресторане. Навсегда.",
  },
  "weather.forsale": {
    en: "<strong>FOR SALE:</strong> Nothing. Everything is free today. It is Alla's birthday.",
    ru: "<strong>ПРОДАЁТСЯ:</strong> Ничего. Сегодня всё бесплатно. У Аллы день рождения.",
  },
  "weather.reminder": {
    en: "<strong>REMINDER:</strong> Ori requires one (1) doggy bag. This is non-negotiable.",
    ru: "<strong>НАПОМИНАНИЕ:</strong> Ори требуется один (1) пакет с остатками. Это не обсуждается.",
  },

  // Celebrate Button
  "celebrate.celebrating": { en: "CELEBRATING...", ru: "ПРАЗДНУЕМ..." },
  "celebrate.click": { en: "CLICK TO CELEBRATE!", ru: "НАЖМИ ЧТОБЫ ПРАЗДНОВАТЬ!" },
  "celebrate.recommend": {
    en: "The Daily Woof Editorial Board strongly recommends pressing this button.",
    ru: "Редакция Дейли Гав настоятельно рекомендует нажать эту кнопку.",
  },

  // Footer
  "footer.helwoof": { en: "Hel", ru: "Хел" },
  "footer.woof": { en: "WOOF!", ru: "ГАВ!" },
  "footer.happy": {
    en: "Happy Birthday, Alla. You are deeply, ridiculously, endlessly loved.",
    ru: "С Днём Рождения, Алла. Тебя безумно, безгранично, бесконечно любят.",
  },
  "footer.copyright": {
    en: "© 2026 The Daily Woof — Ori, Editor-in-Chief",
    ru: "© 2026 Дейли Гав — Ори, главный редактор",
  },
  "footer.madewith": {
    en: "Made with",
    ru: "Сделано с",
  },
  "footer.madeby": {
    en: "by Tianen & the entire birthday crew",
    ru: "Тианеном и всей праздничной командой",
  },
  "footer.prohibited": {
    en: "Unauthorized sadness strictly prohibited.",
    ru: "Несанкционированная грусть строго запрещена.",
  },

  // Ori's Tips
  "tips.title": { en: "Ori's Life Advice Column", ru: "Колонка жизненных советов от Ори" },
  "tips.1": { en: "If someone you love walks in the door, act like you haven't seen them in years.", ru: "Если кто-то, кого ты любишь, входит в дверь — веди себя так, будто не видел его годами." },
  "tips.2": { en: "Naps are not laziness. Naps are self-care. Take more naps.", ru: "Сон — это не лень. Сон — это забота о себе. Спите больше." },
  "tips.3": { en: "Always sniff before you commit.", ru: "Всегда обнюхай, прежде чем браться за дело." },
  "tips.4": { en: "If the hooman is sad, sit closer. It works every time.", ru: "Если хуман грустит — сядь ближе. Работает каждый раз." },
  "tips.5": { en: "Loyalty is free. Give it generously.", ru: "Верность бесплатна. Раздавай щедро." },
  "tips.6": { en: "Treats are proof that the universe loves you.", ru: "Вкусняшки — доказательство того, что вселенная тебя любит." },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  function t(key: string): string {
    const entry = translations[key];
    if (!entry) return key;
    return entry[lang] ?? key;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}