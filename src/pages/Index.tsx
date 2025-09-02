import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import Icon from '@/components/ui/icon';

export default function Index() {
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  const equipmentData = [
    {
      id: 1,
      name: "Газовый котел ТГК-300",
      category: "Газовые котлы",
      power: "300 кВт",
      efficiency: "95%",
      price: "От 450 000 ₽",
      specs: {
        fuel: "Природный газ",
        pressure: "0.3 МПа",
        temperature: "115°C",
        weight: "850 кг",
        dimensions: "1200×800×1500 мм"
      },
      image: "/img/a4e104b6-e151-4ee2-a2c5-842184fa6d7d.jpg",
      description: "Высокоэффективный газовый котел для промышленного использования"
    },
    {
      id: 2,
      name: "Паровой котел ПК-500",
      category: "Паровые котлы",
      power: "500 кВт",
      efficiency: "92%",
      price: "От 780 000 ₽",
      specs: {
        fuel: "Природный газ / Дизель",
        pressure: "0.7 МПа",
        temperature: "180°C",
        weight: "1200 кг",
        dimensions: "1500×1000×1800 мм"
      },
      image: "/img/a4e104b6-e151-4ee2-a2c5-842184fa6d7d.jpg",
      description: "Надежный паровой котел для средних производственных предприятий"
    },
    {
      id: 3,
      name: "Твердотопливный котел ТТК-200",
      category: "Твердотопливные котлы",
      power: "200 кВт",
      efficiency: "88%",
      price: "От 320 000 ₽",
      specs: {
        fuel: "Уголь / Дрова / Пеллеты",
        pressure: "0.2 МПа",
        temperature: "90°C",
        weight: "650 кг",
        dimensions: "1000×700×1300 мм"
      },
      image: "/img/a4e104b6-e151-4ee2-a2c5-842184fa6d7d.jpg",
      description: "Экономичное решение для отопления производственных помещений"
    }
  ];

  const projects = [
    {
      title: "Завод металлоконструкций",
      description: "Установка промышленной котельной мощностью 2 МВт",
      year: "2023",
      equipment: "3 котла ТГК-300, система автоматики"
    },
    {
      title: "Текстильная фабрика",
      description: "Модернизация паровой котельной",
      year: "2023",
      equipment: "2 котла ПК-500, новая система водоподготовки"
    },
    {
      title: "Деревообрабатывающий комбинат",
      description: "Котельная на древесных отходах",
      year: "2022",
      equipment: "4 котла ТТК-200, система подачи топлива"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Flame" size={32} className="text-primary" />
              <h1 className="text-2xl font-bold text-foreground">ТехноКотел</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors">Продукция</a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">Проекты</a>
              <a href="#certificates" className="text-foreground hover:text-primary transition-colors">Сертификаты</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
              <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-r from-muted via-card to-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-foreground">
            Промышленное котельное оборудование
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Производство, поставка и монтаж высокотехнологичного котельного оборудования 
            для промышленных предприятий. Более 15 лет опыта на рынке.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={20} className="mr-2" />
              Получить консультацию
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Download" size={20} className="mr-2" />
              Скачать каталог
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Каталог оборудования</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {equipmentData.map((equipment) => (
              <Card key={equipment.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <img 
                    src={equipment.image} 
                    alt={equipment.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-2">{equipment.name}</CardTitle>
                      <Badge variant="secondary">{equipment.category}</Badge>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-primary">{equipment.price}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{equipment.description}</CardDescription>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Icon name="Zap" size={16} className="mr-2 text-primary" />
                      <span>Мощность: {equipment.power}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="TrendingUp" size={16} className="mr-2 text-primary" />
                      <span>КПД: {equipment.efficiency}</span>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <Tabs defaultValue="specs" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="specs">Характеристики</TabsTrigger>
                      <TabsTrigger value="details">Подробности</TabsTrigger>
                    </TabsList>
                    <TabsContent value="specs" className="space-y-2">
                      {Object.entries(equipment.specs).map(([key, value]) => (
                        <div key={key} className="flex justify-between text-sm">
                          <span className="text-muted-foreground capitalize">
                            {key === 'fuel' ? 'Топливо' : 
                             key === 'pressure' ? 'Давление' :
                             key === 'temperature' ? 'Температура' :
                             key === 'weight' ? 'Вес' :
                             key === 'dimensions' ? 'Размеры' : key}:
                          </span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </TabsContent>
                    <TabsContent value="details">
                      <p className="text-sm text-muted-foreground">
                        Современное оборудование с автоматической системой управления, 
                        соответствует всем российским стандартам безопасности.
                      </p>
                    </TabsContent>
                  </Tabs>

                  <Button className="w-full mt-4">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Заказать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Наши проекты</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <Badge variant="outline">{project.year}</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{project.description}</CardDescription>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Settings" size={16} className="mr-2" />
                    <span>{project.equipment}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Сертификаты и лицензии</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((cert) => (
              <Card key={cert} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <img 
                    src="/img/224685ce-c896-4099-bf66-aefa57ef5d79.jpg" 
                    alt={`Сертификат ${cert}`}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold">Сертификат соответствия №{cert}</h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Подтверждает соответствие продукции требованиям безопасности
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-foreground">О компании ТехноКотел</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Более 15 лет мы специализируемся на производстве и поставке промышленного котельного оборудования. 
              Наша компания обеспечивает полный цикл услуг: от проектирования до монтажа и технического обслуживания.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">15+ лет опыта</h3>
                <p className="text-muted-foreground">Успешно работаем на рынке промышленного оборудования</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">500+ клиентов</h3>
                <p className="text-muted-foreground">Довольных клиентов по всей России</p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Гарантия качества</h3>
                <p className="text-muted-foreground">5 лет гарантии на всё оборудование</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground">Контакты</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Свяжитесь с нами</CardTitle>
                  <CardDescription>Получите консультацию специалиста</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <span>г. Москва, ул. Промышленная, д. 25</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <span>+7 (495) 123-45-67</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <span>info@tehnokotel.ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} className="text-primary" />
                    <span>Пн-Пт: 9:00-18:00, Сб: 10:00-15:00</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Быстрая заявка</CardTitle>
                  <CardDescription>Оставьте заявку и мы перезвоним в течение 15 минут</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Ваше имя" 
                        className="w-full p-3 border border-input rounded-md bg-background"
                      />
                    </div>
                    <div>
                      <input 
                        type="tel" 
                        placeholder="Телефон" 
                        className="w-full p-3 border border-input rounded-md bg-background"
                      />
                    </div>
                    <div>
                      <textarea 
                        placeholder="Комментарий" 
                        rows={4}
                        className="w-full p-3 border border-input rounded-md bg-background resize-none"
                      ></textarea>
                    </div>
                    <Button className="w-full" size="lg">
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Flame" size={24} className="text-primary" />
                <span className="text-lg font-bold">ТехноКотел</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Надежное промышленное котельное оборудование для вашего бизнеса
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Продукция</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Газовые котлы</a></li>
                <li><a href="#" className="hover:text-primary">Паровые котлы</a></li>
                <li><a href="#" className="hover:text-primary">Твердотопливные котлы</a></li>
                <li><a href="#" className="hover:text-primary">Запчасти</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Проектирование</a></li>
                <li><a href="#" className="hover:text-primary">Монтаж</a></li>
                <li><a href="#" className="hover:text-primary">Техническое обслуживание</a></li>
                <li><a href="#" className="hover:text-primary">Ремонт</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@tehnokotel.ru</li>
                <li>г. Москва, ул. Промышленная, 25</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="text-center text-sm text-muted-foreground">
            <p>&copy; 2024 ТехноКотел. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}