_PACKAGE_JSON:
npm start (Сборка и запуск проекта на локальном сервере)
npm start:dev:server (Запуск логального json сервера для работой с внутренней базой данных)

Большая чать функционала покрыта unit тестами на jest:
npm run test:unit

В проект подключен линтер Eslint. Для анализа файлов:
npm run lint:ts
npm run lint:ts:fix (автоисправление файлов)

Иницализирован storybook для ui компонентов.
npm run storybook

Для ui компонентов так же внедрены скриншот тесты. (Для работы необходим запущенный Docker)

При запущенном storybook'е и Docker'е:
npm run test:ui
npm run test:ui:ok (для апрува новых скриншотов)

Так же доступен визуальны просмотр скриншотов.
npm run test:ui:report

создастся файл report.html в дирректории progect/loki/report.html (при условии что есть визуальные изменения проекта)
