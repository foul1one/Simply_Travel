(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<router-outlet></router-outlet>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\" id=\"upMain\">\n    <div class=\"page-header section-dark\" style=\"background-image: url('assets/img/background.jpg');\">\n        <div class=\"filter\"></div>\n        <div class=\"content-center\">\n            <div class=\"container\">\n                <div class=\"title-brand\">\n                    <h1 class=\"textFamilyStyle textColor\">Simply Travel</h1>  \n                </div>\n\n                <h2 class=\"presentation-subtitle text-center textColor textFontFamilyWelcome\">Путешесвуй легко</h2>\n            </div>\n        </div>\n        <div class=\"moving-clouds\" style=\"background-image: url('assets/img/clouds.png');\"></div>\n        <h3 class=\"category-absolute grow\">\n            <a class=\"textColor textFontFamilyWelcome\" href=\"#about\">\n                О нас\n                <p><i class=\"nc-icon nc-minimal-down\"></i></p>\n            </a>\n        </h3>\n    </div>\n    <div class=\"main\" id=\"about\" >\n      <div class=\"section\">\n          <div class=\"container\">\n              <div style=\"margin-top: -50px;\"> \n                  <h3 class=\"textFontFamilyMain\" style=\"text-align: center;\">О нас</h3>\n                  <p style=\"font-size: 140%;\" class=\"textFontFamilyMain\">Мы команда «Simply Travel» и мы организовываем путешествия «под ключ» по всей России. Теперь не нужно планировать поездки за год, \n                    встречаться в офисе с туроператором, оформлять загранпаспорт и визу, ведь наше агентство работает в online-среде и предлагает варианты для отдыха в \n                    пределах границ РФ! Благодаря «Simply Travel» и нашим персонализированным трипмейтам (гайдам по путешествиям для планшетов и смартфонов; \n                    с англ. trip'mate – товарищ по путешествию) Ваши представления о незабываемом отдыхе перестанут ограничиваться мечтами о турецких отелях, \n                    парижской Эйфелевой башне и итальянской пицце! Мы предлагаем доступные путешествия по России на любой вкус: как типовые (йога-туры, эко-туры, экстрим-туры и пр.), \n                    так и разрабатываемые индивидуально для каждого клиента, исходя из его предпочтений. Необходимо лишь заполнить специальную форму на нашем сайте и указать сумму, \n                    которую Вы готовы вложить в отпуск.</p>\n              </div>\n          </div>\n      </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/individualTour/individualTour.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/individualTour/individualTour.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n  <div class=\"page-header section-dark\" style=\"background-image: url('assets/img/background.jpg');\">\r\n    <div class=\"filter\"></div>\r\n    <div class=\"moving-clouds\" style=\"background-image: url('assets/img/clouds.png');\"></div>\r\n    <div class=\"content-center\">\r\n      <div class=\"container\">\r\n        <div class=\"title-brand\">\r\n          <h2 class=\"textFontFamilyWelcome\">Заполните форму и мы создадим для вас путешествие мечты</h2>\r\n        </div>\r\n      </div>\r\n      <div class=\"card\" style=\"padding: 15px; background-color: #4fc7bd; margin-top: 20px;\">\r\n        <form>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"inputEmail4\">ФИО</label>\r\n              <input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"ФИО\" [(ngModel)]=\"fio\" name=\"fio\">\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"inputPassword4\">Номер телефона</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"+7-(999)-00-00-000\" [(ngModel)]=\"number\" name=\"number\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"inputEmail4\">Email</label>\r\n              <input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\">\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"inputPassword4\">Какую суммы вы готовы вложить в путешествие?</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"₽\" value=\"₽\">\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"exampleFormControlSelect1\">Кто составит вам компанию?</label>\r\n              <select class=\"form-control\" id=\"exampleFormControlSelect1\" [(ngModel)]=\"pusto\">\r\n                <option value=\"1\">Семья</option>\r\n                <option value=\"2\">Друзья</option>\r\n                <option value=\"3\">Возлюбленный / Возлюбленная</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group col-md-6\">\r\n              <label>Выберите даты путешествия</label>\r\n              <form class=\"form-inline\">\r\n                <div class=\"form-group\" >\r\n                    <div style=\"background-color: #4fc7bd;\" class=\"input-group date\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                        <input style=\"width: 317px;\" class=\"form-control\" placeholder=\"дд.мм.гггг - дд.мм.гггг\"\r\n                             name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" (focus)=\"focus=true\" (blur)=\"focus=false\" />\r\n                        <div style=\"background-color: #4fc7bd;\" class=\"input-group-append\">\r\n                            <span class=\"glyphicon glyphicon-calendar input-group-text\">\r\n                              <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"form-row\">\r\n            <div class=\"form-group col-md-6\">\r\n              <label for=\"inputPassword4\">Ваш вариант компаньона</label>\r\n              <input type=\"text\" class=\"form-control\" id=\"inputPassword4\" >\r\n            </div>\r\n            <div class=\"form-group col-md-6\" style=\"text-align: right; margin-top: 30px;\">\r\n              <button style=\"background-color: white; border: 0px; color: #255c57; width: 150px;\" class=\"btn btn-round\">Далее</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<footer>Спасибо, что пользуетесь нашими услугами</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\">\n    <div class=\"container\">\n        <div class=\"navbar-translate\">\n            <a *ngIf=\"appService.isNotHome()\" class=\"textFamilyStyle textColor\" [routerLink]=\"['/']\">Simply Travel</a>\n            <a *ngIf=\"!appService.isNotHome()\" class=\"textFamilyStyle textColor\" href=\"#upMain\">Simply Travel</a>\n           \n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n            </button>\n        </div>\n        <div class=\"navbar-collapse\" id=\"navbarToggler\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a *ngIf=\"appService.isNotHome()\" [routerLink]=\"['/']\" class=\"nav-link textFontFamilyWelcome\">\n                        <i class=\"nc-icon nc-minimal-left\"></i> На главную\n                    </a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a [routerLink]=\"['/individualTour']\" class=\"nav-link textFontFamilyWelcome\">\n                        <i class=\"nc-icon nc-compass-05\"></i> Индивидуальный тур</a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a [routerLink]=\"['/tipTour']\" class=\"nav-link textFontFamilyWelcome\">\n                        <i class=\"nc-icon nc-world-2\"></i> Типы отдыха</a>\n                </li>\n                <li class=\"nav-item\" *ngIf=\"!isDocumentation()\">\n                    <a href=\"\" class=\"nav-link textFontFamilyWelcome\">\n                        <i class=\"nc-icon\"><img src=\"assets/img/instagram_icon.png\" style=\"width: 18px; height: 18px; margin-top: -7px;\"></i> Instagram</a>\n                </li>\n                <li class=\"nav-item\">\n                    <button type = \"button\" class = \"btn buttonColor btn-round textFontFamilyWelcome\" (click)=\"signupLink()\"> ​​<i class = \"nc-icon nc-circle-10\" style=\"margin-top: -20px;\"> </i> Войти</button>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header\" style=\"background-image: url('./assets/img/login-image.jpg');\">\n        <div class=\"filter\"></div>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\n                      <div class=\"card card-register\">\n                          <h3 class=\"title\">Добро пожаловать</h3>\n                          <form class=\"register-form\">\n                              <label>Email</label>\n                              <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\">\n                                      <i class=\"nc-icon nc-email-85\"></i>\n                                  </span>\n                                </div>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Email\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                              </div>\n                              <label>Пароль</label>\n                              <div class=\"input-group form-group-no-border\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                                <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\">\n                                      <i class=\"nc-icon nc-key-25\"></i>\n                                  </span>\n                                </div>\n                                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" (focus)=\"focus1=true\" (blur)=\"focus1=false\" >\n                              </div>                              \n                          </form>       \n                          <button (click)=\"click()\" style=\"background-color: white; border: 0px; color: #255c57;\" class=\"btn btn-block btn-round\">Войти</button>\n                          <div class=\"forgot\">\n                              <a href=\"#\" style=\"color: white;\" class=\"btn btn-link\">Забыли пароль?</a>\n                          </div>\n                      </div>\n                    </div>\n                </div>\n            </div>\n    </div>\n</div>\n<footer>Спасибо, что пользуетесь нашими услугами</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tipTour/tipTour.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tipTour/tipTour.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    \r\n    <div class=\"page-header section-dark\" style=\"background-image: url('assets/img/background.jpg');\">\r\n        \r\n        <div class=\"filter\"></div>\r\n        <div class=\"moving-clouds\" style=\"background-image: url('assets/img/clouds.png');\"></div> \r\n        <div class=\"content-center\">\r\n            <div class=\"container\">\r\n                <div class=\"title-brand\">\r\n                    <h2 class=\"textFontFamilyWelcome\" style=\"margin-bottom: 20px;\" >Мы собрали туры на любой вкус</h2>\r\n\r\n                    <div class=\"container\" style=\"width: 800px; margin-bottom: -70px; margin-left: -33px;\">\r\n                        <div class=\"page-carousel\" style=\"text-align: center; background-color: rgba(0, 0, 0, 0);\">\r\n                            <ngb-carousel>\r\n                                <ng-template ngbSlide>\r\n                \r\n                                    <div class=\"container\">\r\n                \r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6 grow\">\r\n                                                <a href=\"#yoga\">\r\n                                                    <h3 class=\"textFontFamilyWelcome\" style=\"color:white; text-align: center;\">Йога туры</h3>\r\n                                                    <img src=\"assets/img/yoga.jpg\" style=\"width: 195px; height: 195px; border-radius: 60px;\">\r\n                                                </a>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 grow\">\r\n                                                <a href=\"#extrim\">\r\n                                                    <h3 class=\"textFontFamilyWelcome\" style=\"color:white; text-align: center;\">Экстрим туры</h3>\r\n                                                    <img src=\"assets/img/extrim.jpg\" style=\"width: 195px; height: 195px; border-radius: 60px;\">\r\n                                                </a>\r\n                                            </div>\r\n                                        </div>\r\n                \r\n                                    </div>\r\n                \r\n                                    <div class=\"container\" style=\"margin-bottom: 50px\">\r\n                \r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6 grow\">\r\n                                                <a href=\"#gornolyzh\">\r\n                                                    <h3 class=\"textFontFamilyWelcome\" style=\"color:white; text-align: center;\">Горнолыжные туры</h3>\r\n                                                    <img src=\"assets/img/gor_lyzh.jpg\" style=\"width: 195px; height: 195px; border-radius: 60px;\">\r\n                                                </a>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 grow\">\r\n                                                <a href=\"#ekskurs\">\r\n                                                    <h3 class=\"textFontFamilyWelcome\" style=\"color:white; text-align: center;\">Экскурсионные туры</h3>\r\n                                                    <img src=\"assets/img/ekskur.jpg\" style=\"width: 195px; height: 195px; border-radius: 60px;\">\r\n                                                </a>\r\n                                            </div>\r\n                                        </div>\r\n                \r\n                                    </div>\r\n                \r\n                                </ng-template>\r\n                                <ng-template ngbSlide>\r\n                                    \r\n                                    <div class=\"container\">\r\n                \r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6 grow\">\r\n                                                <a href=\"#eko\">\r\n                                                    <h3 class=\"textFontFamilyWelcome\" style=\"color:white; text-align: center;\">Экотуры</h3>\r\n                                                    <img src=\"assets/img/eko.jpg\" style=\"width: 195px; height: 195px; border-radius: 60px;\">\r\n                                                </a>\r\n                                            </div>\r\n                                            <div class=\"col-md-6 grow\">\r\n                                                <a href=\"#gastro\">\r\n                                                    <h3 class=\"textFontFamilyWelcome\" style=\"color:white; text-align: center;\">Гастротуры</h3>\r\n                                                    <img src=\"assets/img/gastro.jpg\" style=\"width: 195px; height: 195px; border-radius: 60px;\">\r\n                                                </a>\r\n                                            </div>\r\n                                        </div>\r\n                \r\n                                    </div>\r\n                \r\n                                    <div class=\"container\" style=\"margin-bottom: 50px; margin-left: 24%;\">\r\n                \r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-md-6 grow\">\r\n                                                <a href=\"#mistery\">\r\n                                                    <h3 class=\"textFontFamilyWelcome\" style=\"color:white; text-align: center;\">Mistery тур</h3>\r\n                                                    <img src=\"assets/img/mestery.jpg\" style=\"width: 195px; height: 195px; border-radius: 60px;\">\r\n                                                </a>\r\n                                            </div>\r\n                                        </div>\r\n                \r\n                                    </div>\r\n                \r\n                                </ng-template>\r\n                                \r\n                            </ngb-carousel>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>   \r\n            </div>\r\n        </div>\r\n    </div>        \r\n    <div class=\"main\" id=\"yoga\">\r\n        <h2 style=\"text-align: center; margin-top: 50px;\">Выберите подходящий вам тур</h2>\r\n        <div class=\"section\" style=\"text-align: center;\">\r\n            <div class=\"container\">\r\n                <hr style=\"margin-top: -50px;\">\r\n                <div style=\"padding-bottom: 15px; margin-top: 25px;\" >\r\n                    <h3 style=\"text-align: center;\">Йога туры</h3>\r\n                    <img src=\"assets/img/yoga_about.jpg\" class=\"pictureAbout\">\r\n                    <p style=\"text-align: justify;\">Йога-тур – это путешествие, сочетающее в себе экскурсионный и активный туризм, а также регулярные занятия йогой и медитации. \r\n                        Мы организовываем разнообразные йога-туры по России, которые кроме практических занятий включают в себя лекции от лучших преподавателей йоги \r\n                        страны, оздоровительные процедуры, детокс и многое другое. Наши путешествия рассчитаны на людей разных возрастов, с большим опытом занятий йогой \r\n                        или без него.</p>\r\n                    <div id=\"extrim\"></div>\r\n                    <button class=\"btn btn-round\" style=\"font-family: Century Gothic, sans-serif;\">Заказать тур</button>\r\n                </div>\r\n                <hr>\r\n                <div style=\"padding-bottom: 15px;\">\r\n                    <h3 style=\"text-align: center;\">Экстрим туры</h3>\r\n                    <img src=\"assets/img/extrim_about.jpg\" class=\"pictureAbout\">\r\n                    <p style=\"text-align: justify;\">Активный отдых в России – это отличный способ познакомиться с потрясающей красотой и величием нашей природы. Маршруты и виды туров поражают свои \r\n                        разнообразием: конные туры в Адыгее и сафари по ледяной глади Байкала, сплавы по горным алтайским рекам и подъемы на кавказские вершины, \r\n                        серфинг у камчатских берегов и дайвинг в затопленных пещерах Урала.</p>\r\n                    <p style=\"text-align: justify;\">Из экзотичных видов отдыха стоит попробовать сноубординг с вулканических склонов Камчатки или горные лыжи с заброской на вертолете на вершину там же. \r\n                        Не менее захватывающими будут походы за полярный круг во время полярного дня или походы в тундру под северным сиянием. \r\n                        В северных регионах России обязательно стоит попробовать прокатиться в собачей или оленьей упряжке, а также переночевать в традиционном жилище.</p>\r\n                    <div id=\"gornolyzh\"></div>\r\n                    <button class=\"btn btn-round\" style=\"font-family: Century Gothic, sans-serif;\">Заказать тур</button>\r\n                    \r\n                </div>\r\n                <hr>       \r\n                <div style=\"padding-bottom: 15px;\">\r\n                    <h3 style=\"text-align: center;\">Горнолыжные туры</h3>\r\n                    <img src=\"assets/img/gor_lyzh_about.jpg\" class=\"pictureAbout\">\r\n                    <p style=\"text-align: justify;\">Горнолыжные курорты России с каждым годом приобретают все большую популярность. Они активно развиваются и приятно удивляют \r\n                        поклонников горных лыж и сноуборда, поскольку не уступают по комфорту, оснащённости и качеству трасс своим европейским «коллегам». \r\n                        А фантастические панорамы захватывают дух даже у самых искушенных любителей горных пейзажей.</p>\r\n                    <p style=\"text-align: justify;\">Безвизовость и бюджетность делают отдых на горнолыжных курортах России особенно привлекательными.</p>\r\n                    <p style=\"text-align: justify;\" >Simply Travel предлагает оценить по достоинству отдых на горнолыжных курортах Красной Поляны, Домбая и Приэльбрусья.</p>\r\n                    <div id=\"ekskurs\"></div>\r\n                    <button class=\"btn btn-round\" style=\"font-family: Century Gothic, sans-serif;\">Заказать тур</button>\r\n                </div>\r\n                <hr>\r\n                <div style=\"padding-bottom: 15px;\">\r\n                    <h3 style=\"text-align: center;\">Экскурсионные туры</h3>\r\n                    <img src=\"assets/img/ekskur_about.jpg\" class=\"pictureAbout\">\r\n                    <p style=\"text-align: justify;\">Россия богата как природными, так и рукотворными достопримечательностями, удивительными историческими постройками и культурными традициями. \r\n                        В России можно найти как невероятно красивые деревянные храмы, так и живописные уголки, созданные природой именно для приятного отдыха.</p>\r\n                    <p style=\"text-align: justify;\">Знакомство с Россией принято начинать с Москвы и Санкт-Петербурга – двух столиц нашей страны. Однако сегодня все большей популярностью пользуются \r\n                        туры в другие регионы, все больше новых впечатлений и открытий туристы получают от путешествий в Карелию, на Байкал и Алтай, в Якутию и на \r\n                        Дальний Восток.</p>\r\n                    <div id=\"eko\"></div>\r\n                    <button class=\"btn btn-round\" style=\"font-family: Century Gothic, sans-serif;\">Заказать тур</button>\r\n                </div>\r\n                <hr>       \r\n                <div style=\"padding-bottom: 15px;\">\r\n                    <h3 style=\"text-align: center;\">Экотуры</h3>\r\n                    <img src=\"assets/img/eko_about.jpg\" class=\"pictureAbout\">\r\n                    <p style=\"text-align: justify;\">Россия — идеальное место для экологического туризма! Во-первых, обширная территория нашей страны заселена всего лишь на \r\n                        половину. Во-вторых, по России проходят почти все климатические зоны планеты — от арктической до субтропической. Ну и в третьих, \r\n                        ландшафты у нас настолько разнообразны и удивительны, что 11 уникальных природных объектов уже включены в список всемирного наследия \r\n                        ЮНЕСКО и еще 15 областей ожидают добавления в него.</p>\r\n                    <p style=\"text-align: justify;\">Это значит, перед вами открывается огромный выбор мест для экологического туризма в России.</p>\r\n                    <div id=\"gastro\"></div>\r\n                    <button class=\"btn btn-round\" style=\"font-family: Century Gothic, sans-serif;\">Заказать тур</button>\r\n                </div>\r\n                <hr>       \r\n                <div style=\"padding-bottom: 15px;\">\r\n                    <h3 style=\"text-align: center;\">Гастротуры</h3>\r\n                    <img src=\"assets/img/gastro_about.jpg\" class=\"pictureAbout\">\r\n                    <p style=\"text-align: justify;\">Горнолыжные курорты России с каждым годом приобретают все большую популярность. Они активно развиваются и приятно удивляют \r\n                        поклонников горных лыж и сноуборда, поскольку не уступают по комфорту, оснащённости и качеству трасс своим европейским «коллегам». \r\n                        А фантастические панорамы захватывают дух даже у самых искушенных любителей горных пейзажей.</p>\r\n                    <p style=\"text-align: justify;\">Безвизовость и бюджетность делают отдых на горнолыжных курортах России особенно привлекательными.</p>\r\n                    <p style=\"text-align: justify;\" >Simply Travel предлагает оценить по достоинству отдых на горнолыжных курортах Красной Поляны, Домбая и Приэльбрусья.</p>\r\n                    <div id=\"mistery\"></div>\r\n                    <button class=\"btn btn-round\" style=\"font-family: Century Gothic, sans-serif;\">Заказать тур</button>\r\n                </div>\r\n                <hr>       \r\n                <div style=\"padding-bottom: 15px;\">\r\n                    <h3 style=\"text-align: center;\">Mistery тур</h3>\r\n                    <img src=\"assets/img/mistery_about.jpg\" class=\"pictureAbout\">\r\n                    <p style=\"text-align: justify;\">Данный раздел в разработке.</p>\r\n                    <button class=\"btn btn-round\" style=\"font-family: Century Gothic, sans-serif;\">Заказать тур</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
        this.renderer.listen('window', 'scroll', function (event) {
            var number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                navbar.classList.remove('navbar-transparent');
            }
            else {
                navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"]),
        __metadata("design:type", _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_tipTour_tipTour_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/tipTour/tipTour.component */ "./src/app/components/tipTour/tipTour.component.ts");
/* harmony import */ var _components_individualTour_individualTour_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/individualTour/individualTour.component */ "./src/app/components/individualTour/individualTour.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/__ivy_ngcc__/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm5/jw-bootstrap-switch-ng2.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _components_tipTour_tipTour_component__WEBPACK_IMPORTED_MODULE_9__["TipTour"],
                _components_individualTour_individualTour_component__WEBPACK_IMPORTED_MODULE_10__["IndividualTour"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_12__["NouisliderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_13__["JwBootstrapSwitchNg2Module"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            entryComponents: [],
            exports: [_components_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_tipTour_tipTour_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tipTour/tipTour.component */ "./src/app/components/tipTour/tipTour.component.ts");
/* harmony import */ var _components_individualTour_individualTour_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/individualTour/individualTour.component */ "./src/app/components/individualTour/individualTour.component.ts");
/* harmony import */ var _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/signup/signup.component */ "./src/app/components/signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'signup', component: _components_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
    { path: 'tipTour', component: _components_tipTour_tipTour_component__WEBPACK_IMPORTED_MODULE_3__["TipTour"] },
    { path: 'individualTour', component: _components_individualTour_individualTour_component__WEBPACK_IMPORTED_MODULE_4__["IndividualTour"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppService = /** @class */ (function () {
    function AppService() {
    }
    AppService.prototype.notHome = function (urlNotHomeParams) {
        if (urlNotHomeParams) {
            this.urlNotHome = true;
        }
        else if (!urlNotHomeParams) {
            this.urlNotHome = false;
        }
        return this.urlNotHome;
    };
    AppService.prototype.isNotHome = function () {
        return this.urlNotHome;
    };
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        })
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ngb-progressbar {\n  margin-top: 5rem;\n}\n\n.textFamilyStyle {\n  font-family: Brush Script MT, sans-serif;\n  font-size: 900%;\n  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);\n}\n\n.textColor {\n  color: #ffffff;\n}\n\n.textFontFamilyWelcome {\n  font-family: Century Gothic, sans-serif;\n  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);\n}\n\n.textFontFamilyMain {\n  font-family: Yu Gothic UI Semilight, sans-serif;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  text-align: justify;\n}\n\n.grow:hover {\n  transform: scale(1.1);\n  transition: all 0.3s ease;\n}\n\n.grow {\n  transition: all 0.3s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL0Q6XFxkZXZlbG9wXFxzaW1wbGVUcmF2ZWxSZWZhY3Rvci9zcmNcXGFwcFxcY29tcG9uZW50c1xcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBRENBO0VBQ0ksd0NBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7QUNFSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURBQTtFQUNJLHVDQUFBO0VBQ0EsNENBQUE7QUNHSjs7QURBQTtFQUNJLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDR0o7O0FEQUE7RUFHSSxxQkFBQTtFQUlBLHlCQUFBO0FDR0o7O0FEQUE7RUFJSSx5QkFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuZ2ItcHJvZ3Jlc3NiYXIge1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxufVxyXG4udGV4dEZhbWlseVN0eWxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBCcnVzaCBTY3JpcHQgTVQsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDkwMCU7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcclxufVxyXG5cclxuLnRleHRDb2xvciB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZlxyXG59XHJcbi50ZXh0Rm9udEZhbWlseVdlbGNvbWUge1xyXG4gICAgZm9udC1mYW1pbHk6IENlbnR1cnkgR290aGljLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbn1cclxuXHJcbi50ZXh0Rm9udEZhbWlseU1haW57XHJcbiAgICBmb250LWZhbWlseTogWXUgR290aGljIFVJIFNlbWlsaWdodCwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLmdyb3c6aG92ZXIge1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5ncm93IHtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG59IiwibmdiLXByb2dyZXNzYmFyIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbn1cblxuLnRleHRGYW1pbHlTdHlsZSB7XG4gIGZvbnQtZmFtaWx5OiBCcnVzaCBTY3JpcHQgTVQsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogOTAwJTtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi50ZXh0Q29sb3Ige1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnRleHRGb250RmFtaWx5V2VsY29tZSB7XG4gIGZvbnQtZmFtaWx5OiBDZW50dXJ5IEdvdGhpYywgc2Fucy1zZXJpZjtcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi50ZXh0Rm9udEZhbWlseU1haW4ge1xuICBmb250LWZhbWlseTogWXUgR290aGljIFVJIFNlbWlsaWdodCwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmdyb3c6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmdyb3cge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(renderer, appService) {
        this.renderer = renderer;
        this.appService = appService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.appService.notHome(false);
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home-components',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/individualTour/individualTour.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/individualTour/individualTour.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".h2, h3, p {\n  font-family: Yu Gothic UI Semilight, sans-serif;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\np {\n  font-size: 140%;\n}\n\nbutton {\n  background-color: #4fc7bd;\n  border: 0px;\n  font-family: Yu Gothic UI Semilight, sans-serif;\n}\n\n.textFontFamilyWelcome {\n  font-family: Century Gothic, sans-serif;\n  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);\n}\n\n.pictureAbout {\n  width: 70%;\n  border-radius: 60px;\n  border: 2px solid #4fc7bd;\n}\n\nhr {\n  border: none;\n  background-color: #4fc7bd;\n  color: #4fc7bd;\n  height: 5px;\n}\n\ndiv > label {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbmRpdmlkdWFsVG91ci9EOlxcZGV2ZWxvcFxcc2ltcGxlVHJhdmVsUmVmYWN0b3Ivc3JjXFxhcHBcXGNvbXBvbmVudHNcXGluZGl2aWR1YWxUb3VyXFxpbmRpdmlkdWFsVG91ci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbmRpdmlkdWFsVG91ci9pbmRpdmlkdWFsVG91ci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLCtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtBQ0NKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsK0NBQUE7QUNDSjs7QURDQTtFQUNJLHVDQUFBO0VBQ0EsNENBQUE7QUNFSjs7QURDQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FDRUo7O0FEQ0E7RUFDSSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0VKOztBRENBO0VBQ0ksWUFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9pbmRpdmlkdWFsVG91ci9pbmRpdmlkdWFsVG91ci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oMiwgaDMsIHB7XHJcbiAgICBmb250LWZhbWlseTogWXUgR290aGljIFVJIFNlbWlsaWdodCwgc2Fucy1zZXJpZjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1zaXplOiAxNDAlO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRmYzdiZDtcclxuICAgIGJvcmRlcjogMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFl1IEdvdGhpYyBVSSBTZW1pbGlnaHQsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnRleHRGb250RmFtaWx5V2VsY29tZSB7XHJcbiAgICBmb250LWZhbWlseTogQ2VudHVyeSBHb3RoaWMsIHNhbnMtc2VyaWY7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcclxufVxyXG5cclxuLnBpY3R1cmVBYm91dCB7XHJcbiAgICB3aWR0aDogNzAlOyBcclxuICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjNGZjN2JkO1xyXG59XHJcblxyXG5ociB7XHJcbiAgICBib3JkZXI6IG5vbmU7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRmYzdiZDsgXHJcbiAgICBjb2xvcjojNGZjN2JkOyBcclxuICAgIGhlaWdodDogNXB4O1xyXG59XHJcblxyXG5kaXYgPiBsYWJlbCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiIsIi5oMiwgaDMsIHAge1xuICBmb250LWZhbWlseTogWXUgR290aGljIFVJIFNlbWlsaWdodCwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTQwJTtcbn1cblxuYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmYzdiZDtcbiAgYm9yZGVyOiAwcHg7XG4gIGZvbnQtZmFtaWx5OiBZdSBHb3RoaWMgVUkgU2VtaWxpZ2h0LCBzYW5zLXNlcmlmO1xufVxuXG4udGV4dEZvbnRGYW1pbHlXZWxjb21lIHtcbiAgZm9udC1mYW1pbHk6IENlbnR1cnkgR290aGljLCBzYW5zLXNlcmlmO1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLnBpY3R1cmVBYm91dCB7XG4gIHdpZHRoOiA3MCU7XG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0ZmM3YmQ7XG59XG5cbmhyIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGZjN2JkO1xuICBjb2xvcjogIzRmYzdiZDtcbiAgaGVpZ2h0OiA1cHg7XG59XG5cbmRpdiA+IGxhYmVsIHtcbiAgY29sb3I6IHdoaXRlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/individualTour/individualTour.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/individualTour/individualTour.component.ts ***!
  \***********************************************************************/
/*! exports provided: IndividualTour */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualTour", function() { return IndividualTour; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var IndividualTour = /** @class */ (function () {
    function IndividualTour(appService) {
        this.appService = appService;
        this.pusto = "";
    }
    IndividualTour.prototype.ngOnInit = function () {
        this.appService.notHome(true);
    };
    IndividualTour.ctorParameters = function () { return [
        { type: app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }
    ]; };
    IndividualTour = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'individualTour-app',
            template: __importDefault(__webpack_require__(/*! raw-loader!./individualTour.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/individualTour/individualTour.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./individualTour.component.scss */ "./src/app/components/individualTour/individualTour.component.scss")).default]
        }),
        __metadata("design:paramtypes", [app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], IndividualTour);
    return IndividualTour;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".textFamilyStyle {\n  font-family: Brush Script MT, sans-serif;\n  font-size: 400%;\n  margin-left: 10px;\n}\n\n.textColor {\n  color: #4fc7bd;\n}\n\n.buttonColor {\n  background-color: #4fc7bd;\n  border: 0px;\n}\n\n.textFontFamilyWelcome {\n  padding: 10px 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvRDpcXGRldmVsb3BcXHNpbXBsZVRyYXZlbFJlZmFjdG9yL3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURBQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtBQ0dKOztBRERBO0VBQ0ksa0JBQUE7QUNJSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0RmFtaWx5U3R5bGUge1xyXG4gICAgZm9udC1mYW1pbHk6IEJydXNoIFNjcmlwdCBNVCwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogNDAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi50ZXh0Q29sb3Ige1xyXG4gICAgY29sb3I6ICM0ZmM3YmRcclxufVxyXG4uYnV0dG9uQ29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRmYzdiZDtcclxuICAgIGJvcmRlcjogMHB4O1xyXG59XHJcbi50ZXh0Rm9udEZhbWlseVdlbGNvbWUge1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG59IiwiLnRleHRGYW1pbHlTdHlsZSB7XG4gIGZvbnQtZmFtaWx5OiBCcnVzaCBTY3JpcHQgTVQsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogNDAwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi50ZXh0Q29sb3Ige1xuICBjb2xvcjogIzRmYzdiZDtcbn1cblxuLmJ1dHRvbkNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmYzdiZDtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbi50ZXh0Rm9udEZhbWlseVdlbGNvbWUge1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router, appService) {
        this.location = location;
        this.element = element;
        this.router = router;
        this.appService = appService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    NavbarComponent.prototype.sidebarToggle = function () {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.signupLink = function () {
        this.router.navigate(['/signup']);
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/navbar/navbar.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/signup/signup.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/signup/signup.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/signup/signup.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/signup/signup.component.ts ***!
  \*******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(appService) {
        this.appService = appService;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.appService.notHome(true);
    };
    SignupComponent.prototype.click = function () {
        console.log("Пользователь нажал кнопку");
    };
    SignupComponent.ctorParameters = function () { return [
        { type: app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }
    ]; };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __importDefault(__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/signup/signup.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./signup.component.scss */ "./src/app/components/signup/signup.component.scss")).default]
        }),
        __metadata("design:paramtypes", [app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/components/tipTour/tipTour.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/tipTour/tipTour.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".h2, h3, p {\n  font-family: Yu Gothic UI Semilight, sans-serif;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\np {\n  font-size: 140%;\n}\n\nbutton {\n  background-color: #4fc7bd;\n  border: 0px;\n  font-family: Yu Gothic UI Semilight, sans-serif;\n}\n\n.textFontFamilyWelcome {\n  font-family: Century Gothic, sans-serif;\n  text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.6);\n}\n\n.pictureAbout {\n  width: 70%;\n  height: 40%;\n  border-radius: 60px;\n  border: 2px solid #4fc7bd;\n}\n\nhr {\n  border: none;\n  background-color: #4fc7bd;\n  color: #4fc7bd;\n  height: 5px;\n}\n\n.grow:hover {\n  transform: scale(1.05);\n  transition: all 0.3s ease;\n}\n\n.grow {\n  transition: all 0.3s ease;\n}\n\nngb-carousel > span {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aXBUb3VyL0Q6XFxkZXZlbG9wXFxzaW1wbGVUcmF2ZWxSZWZhY3Rvci9zcmNcXGFwcFxcY29tcG9uZW50c1xcdGlwVG91clxcdGlwVG91ci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90aXBUb3VyL3RpcFRvdXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLGVBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLCtDQUFBO0FDQ0o7O0FEQ0E7RUFDSSx1Q0FBQTtFQUNBLDRDQUFBO0FDRUo7O0FEQ0E7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNFSjs7QURDQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDRUo7O0FESUE7RUFHSSxzQkFBQTtFQUlBLHlCQUFBO0FDREo7O0FESUE7RUFJSSx5QkFBQTtBQ0RKOztBRElBO0VBQ0ksYUFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90aXBUb3VyL3RpcFRvdXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaDIsIGgzLCBwe1xyXG4gICAgZm9udC1mYW1pbHk6IFl1IEdvdGhpYyBVSSBTZW1pbGlnaHQsIHNhbnMtc2VyaWY7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMTQwJTtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZmM3YmQ7XHJcbiAgICBib3JkZXI6IDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBZdSBHb3RoaWMgVUkgU2VtaWxpZ2h0LCBzYW5zLXNlcmlmO1xyXG59XHJcbi50ZXh0Rm9udEZhbWlseVdlbGNvbWUge1xyXG4gICAgZm9udC1mYW1pbHk6IENlbnR1cnkgR290aGljLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggMTBweCByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbn1cclxuXHJcbi5waWN0dXJlQWJvdXQge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0ZmM3YmQ7XHJcbn1cclxuXHJcbmhyIHtcclxuICAgIGJvcmRlcjogbm9uZTsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGZjN2JkOyBcclxuICAgIGNvbG9yOiM0ZmM3YmQ7IFxyXG4gICAgaGVpZ2h0OiA1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuICAgIFxyXG4uZ3Jvdzpob3ZlciB7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmdyb3cge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbm5nYi1jYXJvdXNlbCA+IHNwYW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuIiwiLmgyLCBoMywgcCB7XG4gIGZvbnQtZmFtaWx5OiBZdSBHb3RoaWMgVUkgU2VtaWxpZ2h0LCBzYW5zLXNlcmlmO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG5wIHtcbiAgZm9udC1zaXplOiAxNDAlO1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGZjN2JkO1xuICBib3JkZXI6IDBweDtcbiAgZm9udC1mYW1pbHk6IFl1IEdvdGhpYyBVSSBTZW1pbGlnaHQsIHNhbnMtc2VyaWY7XG59XG5cbi50ZXh0Rm9udEZhbWlseVdlbGNvbWUge1xuICBmb250LWZhbWlseTogQ2VudHVyeSBHb3RoaWMsIHNhbnMtc2VyaWY7XG4gIHRleHQtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuXG4ucGljdHVyZUFib3V0IHtcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA0MCU7XG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0ZmM3YmQ7XG59XG5cbmhyIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGZjN2JkO1xuICBjb2xvcjogIzRmYzdiZDtcbiAgaGVpZ2h0OiA1cHg7XG59XG5cbi5ncm93OmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5ncm93IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbm5nYi1jYXJvdXNlbCA+IHNwYW4ge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/tipTour/tipTour.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/tipTour/tipTour.component.ts ***!
  \*********************************************************/
/*! exports provided: TipTour */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipTour", function() { return TipTour; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/app.service */ "./src/app/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var TipTour = /** @class */ (function () {
    function TipTour(appService) {
        this.appService = appService;
    }
    TipTour.prototype.ngOnInit = function () {
        this.appService.notHome(true);
    };
    TipTour.ctorParameters = function () { return [
        { type: app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"] }
    ]; };
    TipTour = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tipTour-app',
            template: __importDefault(__webpack_require__(/*! raw-loader!./tipTour.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tipTour/tipTour.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./tipTour.component.scss */ "./src/app/components/tipTour/tipTour.component.scss")).default]
        }),
        __metadata("design:paramtypes", [app_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], TipTour);
    return TipTour;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\develop\simpleTravelRefactor\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map