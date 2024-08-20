import type { EmployeeType } from 'src/utils/types'
import {
  Avatar1,
  Avatar2,
  Avatar3,
  Avatar4,
  Avatar5,
  Avatar6,
  Avatar7,
  Avatar8,
  Avatar9,
  Avatar10,
  Avatar11,
  Avatar12,
  Avatar13,
  Avatar14,
  Avatar15,
  Avatar16,
  Avatar17,
  Avatar18,
} from 'src/utils/mock/imports'

export const mockEmployeesData: Array<EmployeeType> = [
  {
    id: 1,
    name: 'Марина',
    lastname: 'Лесецкая',
    image: Avatar1,
    position: 'CEO',
    staff: true,
    available: true,
    workFormat: 'Офис',
    workTime: 'с 09:00 до 18:00 (пн-пт)',
    city: 'Москва',
    contacts: {
      phone: '+7 499 552 5555',
      mobile: '+7 915 298 3476',
      email: 'marinales@gid.com',
      chat: '@marinales',
    },
    lead: {
      id: 1,
      name: 'Марина',
      lastname: 'Лесецкая',
    },
    education: {
      base: {
        degree: 'Высшее',
        organization: 'МГТУ им. Н.Э. Баумана',
        year: 2008,
      },
      additional: [
        {
          degree: 'Повышение квалификации',
          organization: 'Яндекс Практикум',
          year: 2024,
        },
      ],
    },
    skills: {
      core: [
        'Communication',
        'Leadership',
        'Strategic planning',
        'Decision-making',
        'Teamwork',
        'Innovation',
      ],
      languages: ['Английский C1', 'Испанский A2'],
    },
    interests: ['Нумизматика', 'Оперное пение', 'Языки романской группы'],
    achievements: ['#Лидерство', '#УспешныеПроекты'],
    about:
      'Я CEO в компании Газпром ID. В данной должности я уже 6 лет. До этого я работала в Сбербанк 10 лет. Я стараюсь всё время расти в своем направлении. Всегда стараюсь оптимизировать процессы, чтобы оставалось время на любимое хобби. Я увлекаюсь нумизматикой и изучаю историю языков романской группы.',
    favorites: [
      {
        id: 4,
        name: 'Ирина',
        lastname: 'Кунская',
        image: Avatar4,
        position: 'CTO',
        department: 'ИБ',
      },
      {
        id: 5,
        name: 'Иван',
        lastname: 'Абрамов',
        image: Avatar5,
        position: 'CTO',
        department: 'Аналитика',
      },
      {
        id: 23,
        name: 'Алёна',
        lastname: 'Логинова',
        image: Avatar10,
        position: 'Архитектор ПО',
        department: 'Архитектура',
      },
    ],
  },
  {
    id: 2,
    name: 'Алексей',
    lastname: 'Балашов',
    image: Avatar2,
    position: 'CTO',
    staff: true,
    available: false,
    status: {
      description: 'В командировке',
      date: 'с 10.07 по 20.07',
      replacement: {
        id: 47,
        name: 'Мария',
        lastname: 'Кравцова',
      },
    },
    workFormat: 'Удаленно',
    workTime: 'с 09:00 до 18:00 (пн-пт)',
    city: 'Москва',
    contacts: {
      phone: '+7 499 676 3333',
      mobile: '+7 987 654 3210',
      email: ' abalashov@gid.com',
      chat: '@abalashov',
    },
    lead: {
      id: 1,
      name: 'Марина',
      lastname: 'Лесецкая',
    },
    teams: [
      {
        id: 1,
        name: 'Команда №1',
      },
      {
        id: 7,
        name: 'Команда №7',
      },
    ],
    projects: [
      {
        id: 1,
        name: 'Газпром лавка',
        description: 'Разработка сервиса для доставки обедов сотрудникам',
        lead: {
          id: 49,
          name: 'Артур',
          lastname: 'Лесков',
          image: Avatar5,
        },
      },
    ],
    education: {
      base: {
        degree: 'Высшее',
        organization:
          'Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)',
        year: 2003,
      },
      additional: [
        {
          degree: 'Повышение квалификации',
          organization: 'Яндекс Практикум',
          year: 2021,
        },
        {
          degree: 'Повышение квалификации',
          organization: 'Яндекс Практикум',
          year: 2023,
        },
      ],
    },
    skills: {
      core: ['Programming', 'Delegation', 'Analysis', 'Multi-tasking'],
      languages: ['Английский C1', 'Китайский A1'],
    },
    interests: [
      'Чтение классической литературы',
      'Настольный теннис',
      'Игра на гитаре',
      'Вышивание крестиком',
    ],
    achievements: ['#Лидерство', '#УспешныеПроекты'],
    about:
      'Я руководитель отдела разработки в компании Газпром ID. До этого я работал backend разработчиком в этом же отделе в течение 5 лет. Я стараюсь всё время расти в своем направлении. Я стараюсь больше делегировать процессы, чтобы оптимизировать работу, и оставалось время на любимое хобби и семью.',
    favorites: [
      {
        id: 1,
        name: 'Марина',
        lastname: 'Лесецкая',
        image: Avatar1,
        position: 'CEO',
        department: '',
      },
      {
        id: 36,
        name: 'Регина',
        lastname: 'Громова',
        image: Avatar12,
        position: 'Эксперт ИБ',
        department: 'ИБ',
      },
      {
        id: 46,
        name: 'Сергей',
        lastname: 'Федоров',
        image: Avatar14,
        position: 'Системный аналитик',
        department: 'Аналитика',
      },
      {
        id: 50,
        name: 'Александра',
        lastname: 'Глазкова',
        image: Avatar8,
        position: 'Администратор систем',
        department: 'Инфраструктура',
      },
    ],
  },
  {
    id: 3,
    name: 'Диана',
    lastname: 'Куликова',
    image: Avatar3,
    position: 'CTO',
    staff: true,
    available: true,
    workFormat: 'Офис',
    workTime: 'с 09:00 до 18:00 (пн-пт)',
    city: 'Москва',
    contacts: {
      phone: '+7 499 999 2222',
      mobile: '+7 123 456 7890',
      email: ' kulikovad@gid.com',
      chat: '@kulikovad',
    },
    lead: {
      id: 1,
      name: 'Марина',
      lastname: 'Лесецкая',
    },
    teams: [
      {
        id: 3,
        name: 'Команда №3',
      },
      {
        id: 4,
        name: 'Команда №4',
      },
      {
        id: 8,
        name: 'Команда №8',
      },
    ],
    projects: [
      {
        id: 1,
        name: 'Газпром лавка',
        description: 'Разработка сервиса для доставки обедов сотрудникам',
        lead: {
          id: 49,
          name: 'Артур',
          lastname: 'Лесков',
          image: Avatar5,
        },
      },
      {
        id: 12,
        name: 'Газпром умная колонка',
        description: 'Разработка ПО для умной колонки Метан',
        lead: {
          id: 30,
          name: 'Виктор',
          lastname: 'Злобин',
          image: Avatar11,
        },
      },
    ],
    education: {
      base: {
        degree: 'Высшее',
        organization:
          'Московский государственный университет имени М. В. Ломоносова',
        year: 2000,
      },
      additional: [
        {
          degree: 'Повышение квалификации',
          organization: 'Skillfactory',
          year: 2020,
        },
      ],
    },
    skills: {
      core: ['ГИС', 'Анализ данных', 'Внешний аудит ИС'],
      languages: ['Английский B2'],
    },
    interests: ['Бизнес архитектура', 'Корпоративная архитектура', 'Велоспорт'],
    achievements: ['#Лидерство', '#УспешныеПроекты'],
    about:
      'Я руководитель отдела архитектуры в компании Газпром ID уже 9 лет. Я стараюсь всё время расти в своем направлении и регулярно посещаю митапы и лекции, а иногда выступаю сама в качестве докладчика.',
    favorites: [
      {
        id: 22,
        name: 'Архип',
        lastname: 'Бодарев',
        image: Avatar9,
        position: 'Архитектор решений',
        department: 'Архитектура',
      },
      {
        id: 29,
        name: 'Лилия',
        lastname: 'Соловьева',
        image: Avatar15,
        position: 'Администратор систем ИБ',
        department: 'ИБ',
      },
      {
        id: 38,
        name: 'Анна',
        lastname: 'Любавина',
        image: Avatar18,
        position: 'Инженер ИБ',
        department: 'ИБ',
      },
      {
        id: 57,
        name: 'Антон',
        lastname: 'Баранов',
        image: Avatar6,
        position: 'DevOps инженер',
        department: 'Инфраструктура',
      },
    ],
  },
  {
    id: 4,
    name: 'Ирина',
    lastname: 'Кунская',
    image: Avatar4,
    position: 'CTO',
    staff: true,
    available: true,
    workFormat: 'Офис',
    workTime: 'с 09:00 до 18:00 (пн-пт)',
    city: 'Москва',
    contacts: {
      phone: '+7 499 888 1313',
      mobile: '+7 111 222 3344',
      email: ' irakunskaya@gid.com',
      chat: '@irakunskaya',
    },
    lead: {
      id: 1,
      name: 'Марина',
      lastname: 'Лесецкая',
    },
    teams: [
      {
        id: 2,
        name: 'Команда №2',
      },
      {
        id: 5,
        name: 'Команда №5',
      },
    ],
    projects: [
      {
        id: 1,
        name: 'Газпром лавка',
        description: 'Разработка сервиса для доставки обедов сотрудникам',
        lead: {
          id: 49,
          name: 'Артур',
          lastname: 'Лесков',
          image: Avatar5,
        },
      },
      {
        id: 10,
        name: 'Газпром очки AR',
        description:
          'Разработка ПО для очков дополненной реальности, позволяющих качественно улучшить рабочий опыт сотрудников.',
        lead: {
          id: 33,
          name: 'Анастасия',
          lastname: 'Фролова',
          image: Avatar17,
        },
      },
    ],
    education: {
      base: {
        degree: 'Высшее',
        organization:
          'Московский государственный университет имени М. В. Ломоносова',
        year: 2010,
      },
      additional: [
        {
          degree: 'Повышение квалификации',
          organization: 'МФТИ',
          year: 2021,
        },
      ],
    },
    skills: {
      core: [
        'Analysis',
        'Programming',
        'Strategic thinking',
        'PHP',
        'Presentation skills',
      ],
      languages: ['Английский C1', 'Немецкий A1'],
    },
    interests: ['Плавание', 'Шахматы', 'Вокал'],
    achievements: ['#ЛучшийБизнесПроект', '#УспешныеПроекты'],
    about:
      'Я руководитель отдела информационной безопасности в компании Газпром ID. Работаю в компании 4 года. Наш отдел участвовал в разработке проекта "Secure Mobile App Development", который получил номинацию "Лучший бизнес проект". Мне нравится развиваться в своей профессии. Много времени уделяю спорту, особенно плаванию.',
    favorites: [
      {
        id: 7,
        name: 'Мария',
        lastname: 'Васильева',
        image: Avatar7,
        position: 'QA-инженер',
        department: 'Разработка',
      },
      {
        id: 8,
        name: 'Полина',
        lastname: 'Бортникова',
        image: Avatar13,
        position: 'Frontend разработчик',
        department: 'Разработка',
      },
      {
        id: 20,
        name: 'Ирина',
        lastname: 'Коваленко',
        image: Avatar16,
        position: 'Архитектор ПО',
        department: 'Архитектура',
      },
    ],
  },
]
