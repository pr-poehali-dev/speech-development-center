import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const specialists = [
    {
      name: "Василина Петровна",
      role: "Руководитель центра",
      experience: "Высшее педагогическое образование",
      description: "Координация учебного процесса, консультации родителей"
    },
    {
      name: "Логопед центра",
      role: "Логопед-дефектолог",
      experience: "Профессиональная подготовка",
      description: "Коррекция речевых нарушений, развитие артикуляции"
    },
    {
      name: "Педагоги центра",
      role: "Учителя начальных классов",
      experience: "Опытные специалисты",
      description: "Подготовка к школе по современным методикам"
    }
  ];

  const services = [
    {
      icon: "BookOpen",
      title: "Подготовка к школе",
      description: "Комплексная программа развития для будущих первоклассников"
    },
    {
      icon: "MessageCircle",
      title: "Работа с логопедом",
      description: "Коррекция речевых нарушений, постановка звуков, развитие речи"
    },
    {
      icon: "Users",
      title: "Малые классы",
      description: "Не более 12-14 учеников в классе для индивидуального подхода"
    },
    {
      icon: "School",
      title: "Оборудованные аудитории",
      description: "Современное оснащение для комфортного обучения"
    },
    {
      icon: "GraduationCap",
      title: "Опытные педагоги",
      description: "Квалифицированные специалисты с большим стажем работы"
    },
    {
      icon: "Heart",
      title: "Индивидуальный подход",
      description: "Учитываем особенности каждого ребёнка"
    }
  ];

  const galleryImages = [
    "https://cdn.poehali.dev/projects/6b275c47-10ca-491e-9e38-c76f7704f9c2/files/4f7c18ec-3acf-4b15-8418-12f841b47d90.jpg",
    "https://cdn.poehali.dev/projects/6b275c47-10ca-491e-9e38-c76f7704f9c2/files/9cb3e9ae-f37c-47b6-8637-0e1603693f3d.jpg",
    "https://cdn.poehali.dev/projects/6b275c47-10ca-491e-9e38-c76f7704f9c2/files/87a62a0a-c762-453c-8c7e-be7b6065449f.jpg"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Heart" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">Дружок</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О центре</a>
            <a href="#specialists" className="text-sm font-medium hover:text-primary transition-colors">Специалисты</a>
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">Проекты</a>
            <a href="#gallery" className="text-sm font-medium hover:text-primary transition-colors">Галерея</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="rounded-full">Записаться</Button>
        </div>
      </header>

      <section className="py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Образовательный центр
                <span className="text-primary"> «Дружок»</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Подготовка к школе и работа с логопедом в Улан-Удэ
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="rounded-full">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Консультация
                </Button>
                <Button size="lg" variant="outline" className="rounded-full">
                  Подробнее
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/files/63014f01-c422-4729-8448-5c13ad75c205.jpg" 
                alt="Центр развития Дружок" 
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-accent/20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold">О центре</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Образовательный центр «Дружок» в Улан-Удэ — это профессиональная команда педагогов, 
              которые с любовью и заботой готовят детей к школе. Малые классы (12-14 учеников), 
              оборудованные аудитории и работа с логопедом — всё для успешного развития вашего ребёнка.
            </p>
            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <Card className="text-center border-2 hover:border-primary transition-colors rounded-3xl">
                <CardHeader>
                  <Icon name="Award" className="mx-auto text-primary mb-2" size={48} />
                  <CardTitle className="text-2xl">15+</CardTitle>
                  <CardDescription>Лет опыта работы</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center border-2 hover:border-primary transition-colors rounded-3xl">
                <CardHeader>
                  <Icon name="Users" className="mx-auto text-primary mb-2" size={48} />
                  <CardTitle className="text-2xl">500+</CardTitle>
                  <CardDescription>Довольных семей</CardDescription>
                </CardHeader>
              </Card>
              <Card className="text-center border-2 hover:border-primary transition-colors rounded-3xl">
                <CardHeader>
                  <Icon name="Heart" className="mx-auto text-primary mb-2" size={48} />
                  <CardTitle className="text-2xl">100%</CardTitle>
                  <CardDescription>Индивидуальный подход</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="specialists" className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Наши специалисты</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {specialists.map((specialist, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow rounded-3xl">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/40 flex items-center justify-center">
                  <Icon name="UserCircle" size={80} className="text-primary" />
                </div>
                <CardHeader>
                  <CardTitle>{specialist.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{specialist.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{specialist.experience}</p>
                  <p className="text-sm">{specialist.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Наши услуги</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:scale-105 transition-transform rounded-3xl border-2">
                <CardHeader>
                  <Icon name={service.icon as any} className="text-primary mb-4" size={48} />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Проекты</h2>
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden rounded-3xl border-2">
              <div className="bg-gradient-to-r from-primary/20 to-accent/30 p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white rounded-full p-4">
                    <Icon name="Sparkles" className="text-primary" size={40} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-primary">Проект «Мама-логопед»</h3>
                    <p className="text-lg text-muted-foreground">Совместная работа родителя, логопеда и ребёнка</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Icon name="Target" className="text-primary" />
                    Цель проекта
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Уменьшение количества дошкольников с речевыми нарушениями в Октябрьском районе г. Улан-Удэ 
                    и подготовка родителей детей с фонетико-фонематическим нарушением речи (ФФН) к самостоятельной 
                    логопедической коррекции.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="bg-secondary/30 border-0 rounded-2xl">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Icon name="Users" className="text-primary" />
                        Целевая группа
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Родители и дети 6-7 лет с ФФН. Не менее 15 семей получат бесплатную помощь.</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-accent/30 border-0 rounded-2xl">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <Icon name="MapPin" className="text-primary" />
                        Место проведения
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Занятия проводятся на базе Образовательного центра «Дружок» на безвозмездной основе.</p>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Icon name="Lightbulb" className="text-primary" />
                    Уникальная идея
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Запустить процесс коррекции речи детей с ФФН через совместную работу родитель-логопед-ребёнок, 
                    где логопед обучит родителя основам автоматизации звуков. Родитель продолжит работу под кураторством специалиста.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Icon name="ClipboardList" className="text-primary" />
                    Направления деятельности
                  </h4>
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <div className="bg-primary/20 rounded-full p-2 mt-1">
                        <Icon name="Check" className="text-primary" size={16} />
                      </div>
                      <p className="text-sm flex-1">Коррекционные занятия логопеда с ребёнком по развитию фонематических процессов и постановке нарушенных звуков</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="bg-primary/20 rounded-full p-2 mt-1">
                        <Icon name="Check" className="text-primary" size={16} />
                      </div>
                      <p className="text-sm flex-1">Обучение родителей приёмам закрепления навыков развития фонематических процессов и автоматизации звуков</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <div className="bg-primary/20 rounded-full p-2 mt-1">
                        <Icon name="Check" className="text-primary" size={16} />
                      </div>
                      <p className="text-sm flex-1">Продолжение процесса коррекции родителями под контролем логопеда</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Icon name="TrendingUp" className="text-primary" />
                    Ожидаемые результаты
                  </h4>
                  <div className="bg-muted/50 p-4 rounded-2xl space-y-2">
                    <p className="text-sm flex items-start gap-2">
                      <Icon name="Star" className="text-primary mt-1" size={16} />
                      <span>Запущен процесс коррекции речевых нарушений не менее чем у 15 детей</span>
                    </p>
                    <p className="text-sm flex items-start gap-2">
                      <Icon name="Star" className="text-primary mt-1" size={16} />
                      <span>Родители на практике освоят приёмы автоматизации звуков</span>
                    </p>
                    <p className="text-sm flex items-start gap-2">
                      <Icon name="Star" className="text-primary mt-1" size={16} />
                      <span>Создан комплект для тиражирования модели «Мама-логопед»</span>
                    </p>
                    <p className="text-sm flex items-start gap-2">
                      <Icon name="Star" className="text-primary mt-1" size={16} />
                      <span><strong>Главный результат:</strong> чистая речь обучающихся (норма речевого развития)</span>
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-2xl">
                  <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Icon name="AlertCircle" className="text-primary" />
                    Почему это важно?
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Лёгкая форма ФФН часто уступает другим более сложным речевым нарушениям, и дети переходят в школу без необходимой коррекции. 
                    Это существенно затруднит усвоение ребёнком основ грамоты, русского языка и литературы.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Галерея</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-shadow">
                <img 
                  src={image} 
                  alt={`Фото ${index + 1}`} 
                  className="w-full h-80 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-gradient-to-b from-accent/20 to-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <Card className="rounded-3xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MapPin" className="text-primary" />
                    Адрес
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>г. Улан-Удэ, ул. Ключевская, 34 к. 23</p>
                </CardContent>
              </Card>
              <Card className="rounded-3xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Phone" className="text-primary" />
                    Телефон
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="space-y-1">
                    <span className="block">8 (902) 167-09-17 — администратор</span>
                    <span className="block">8 (924) 650-95-35 — Василина Петровна</span>
                  </p>
                </CardContent>
              </Card>
              <Card className="rounded-3xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Mail" className="text-primary" />
                    Email
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>vk.com/druzhok_buryatia</p>
                </CardContent>
              </Card>
            </div>
            <Card className="rounded-3xl">
              <CardHeader>
                <CardTitle>Напишите нам</CardTitle>
                <CardDescription>Мы ответим в ближайшее время</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="rounded-2xl"
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Телефон" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="rounded-2xl"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Ваше сообщение" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="rounded-2xl min-h-32"
                    />
                  </div>
                  <Button type="submit" className="w-full rounded-full" size="lg">
                    Отправить
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-muted/50">
        <div className="container text-center space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Icon name="Heart" className="text-primary" size={32} />
            <span className="text-2xl font-bold text-primary">Дружок</span>
          </div>
          <p className="text-muted-foreground">
            Образовательный центр «Дружок» Улан-Удэ
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;