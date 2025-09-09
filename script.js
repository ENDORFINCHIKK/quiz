const label = document.getElementById('quiz');
        const varOne = document.getElementById('varOne');
        const varTwo = document.getElementById('varTwo');
        const varThree = document.getElementById('varThree');
        const varFour = document.getElementById('varFour');

        const quizDate = [
            "Коли вперше я попросив нюдси(дата)?",
            "Коли ми вперше побачились в живу?",
            "Коли ми вперше поговорили по телефону?",
            "Коли ми вперше ми зайшли в діскорд?",
            "Коли ми вперше ми з тобою побалувались вдвох?)",
            "Коли я вперше приїхав до тебе?",
            "В якому місці у нас був перший поцілунок?",
            "В якому місці у нас з тобою було перше сумісне фото?",
            "В якому місці ми з тобою кушали йоші?",
            "В якому місті у нас було перше побачення (вдвох)?",
            "Коли ти до мене приїхала вдруге, де ти робила макіяж?",
            "Послідовність другого побачення"
        ];
        
        const answersDate = [
            ["17 березня", "18 березня", "15 березня", "20 березня"],  
            ["16 травня", "15 травня", "17 травня", "14 травня"],     
            ["10 березня", "9 березня", "11 березня", "12 березня"],  
            ["14 березня", "13 березня", "15 березня", "16 березня"], 
            ["19 березня", "18 березня", "20 березня", "21 березня"], 
            ["8 червня", "7 червня", "9 червня", "10 червня"],         
            ["У Камʼянському за гаражами", "На вокзалі", "У парку", "У дворі біля дому"],  
            ["У Камʼянському у парку, в місці для поцілунків", "У кафе", "У підʼїзді", "На вокзалі"],  
            ["У парку на березі річки", "У МакДональдсі", "Вдома", "У кафе"],  
            ["Вінниця", "Київ", "Дніпро", "Камʼянське"],  
            ["На лавочці біля підʼїзду", "У квартирі", "У парку", "У кавʼярні"],  
            [
                "Ранкова прогулянка → місто → шаурма → берег Дніпра → парк до Лізи → знайомство з Лізиним другом → вокзал", 
                "Поїли й пішли в парк → шаурма → вокзал", 
                "Зустрілись → відразу на вокзал → додому", 
                "Вокзал → парк → кафе → додому"
            ]
        ];
        
        const correctAnswers = [
            "17 березня",
            "16 травня",
            "10 березня",
            "14 березня",
            "19 березня",
            "8 червня",
            "У Камʼянському за гаражами",
            "У Камʼянському у парку, в місці для поцілунків",
            "У парку на березі річки",
            "Вінниця",
            "На лавочці біля підʼїзду",
            "Ранкова прогулянка → місто → шаурма → берег Дніпра → парк до Лізи → знайомство з Лізиним другом → вокзал"
        ];
        

        const answerForYou = [
            "Що ти хотіла б змінити в мені за цей час?",
            "Яке твоє перше враження після діскорду?",
            "Що ти зрозуміла за ці пів року про мене?",
            "Чого ти прагнеш найбільше?",
            "Як ти уявляєш життя разом?",
            "Якщо б ми могли бачитись кожен день, яка була б твоя реакція?"
        ];

        const extraQuestions = [
            "Найяскравіший момент з Кароліною?",
            "Яку цінність для мене несуть наші стосунки?",
            "Що б я хотів додати в наших стосунках?",
            "Як я нас бачу через 5 років?",
            "Чим я тебе роздражаю?",
            "Який я б хотів отримати спогад від наших зустрічей?"
        ];

        let currentQuestion = 0;
        let countCorrectAnswers = 0;

        function showQuestion() {
            label.textContent = quizDate[currentQuestion];
            varOne.textContent = answersDate[currentQuestion][0];
            varTwo.textContent = answersDate[currentQuestion][1];
            varThree.textContent = answersDate[currentQuestion][2];
            varFour.textContent = answersDate[currentQuestion][3];
        }

        function checkAnswer(answer) {
            if (answer === correctAnswers[currentQuestion]) {
                alert("Правильно!");
                countCorrectAnswers++;
            } else {
                alert("Неправильно! Правильна відповідь: " + correctAnswers[currentQuestion]);
            }
            currentQuestion++;
            if (currentQuestion < quizDate.length) {
                showQuestion();
            } else {
                label.textContent = `Тест завершено ❤️  Балів набрано: ${countCorrectAnswers} з ${quizDate.length}`;
                [varOne, varTwo, varThree, varFour].forEach(btn => btn.style.display = "none");

                const buttonContinue = document.createElement('button');
                buttonContinue.type = "button";
                buttonContinue.textContent = "Або ні?";
                buttonContinue.style.marginTop = "20px";
                document.querySelector("form").appendChild(buttonContinue);

                buttonContinue.addEventListener("click", () => {
                    buttonContinue.style.display = "none";

                    label.textContent = "Мої питання:\n\n";
                    answerForYou.forEach((q, index) => {
                        label.textContent += `${index + 1}. ${q}\n`;
                    });

                    const buttonExtra = document.createElement('button');
                    buttonExtra.type = "button";
                    buttonExtra.textContent = "Ще питання?";
                    buttonExtra.style.marginTop = "20px";
                    document.querySelector("form").appendChild(buttonExtra);

                    buttonExtra.addEventListener("click", () => {
                        buttonExtra.style.display = "none";
                        label.textContent += "\nТвої питання питання:\n\n";
                        extraQuestions.forEach((q, index) => {
                            label.textContent += `${index + 1}. ${q}\n`;
                        });
                    });
                });
            }
        }

        [varOne, varTwo, varThree, varFour].forEach(btn => {
            btn.addEventListener("click", function(e) {
                e.preventDefault();
                checkAnswer(this.textContent);
            });
        });

        showQuestion();