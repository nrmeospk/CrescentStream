export interface ScheduleShow {
  time: string;
  title: string;
  presenter: string;
  type: "featured" | "regular";
}

export interface DaySchedule {
  day: string;
  shows: ScheduleShow[];
}

export const weeklySchedule: DaySchedule[] = [
  {
    day: "Sunday",
    shows: [
      { time: "5:00-7:00 PM", title: "Chamak", presenter: "Baji Yasmeen", type: "featured" },
      { time: "7:00-9:00 PM", title: "Roshni", presenter: "Hafiz Rafaqat & Haji Farooq", type: "regular" }
    ]
  },
  {
    day: "Monday",
    shows: [
      { time: "7:00-9:00 PM", title: "Madni Aaqa Naat Show", presenter: "Afzal Naqshabandi", type: "featured" }
    ]
  },
  {
    day: "Tuesday",
    shows: [
      { time: "8:00-10:00 PM", title: "Sab Rang", presenter: "Saba Nusrat", type: "featured" },
      { time: "9:00 PM", title: "All Across the Arts", presenter: "Norman Warwick & Steve Bewick", type: "regular" }
    ]
  },
  {
    day: "Wednesday",
    shows: [
      { time: "10:00-1:00 PM", title: "Age Concern", presenter: "Razia Shamim MBE", type: "featured" },
      { time: "12:00-2:00 PM", title: "Mix Masala", presenter: "Heena Jabeen", type: "regular" },
      { time: "1:30-3:00 PM", title: "Q&A with Mufti Saab", presenter: "Religious Guidance", type: "featured" },
      { time: "7:00-9:00 PM", title: "Boishakhi Bangla Show", presenter: "Dr Musharraf & Dobir", type: "regular" },
      { time: "9:00-11:00 PM", title: "Phullan dey Rang", presenter: "Muhammad Afzal", type: "featured" }
    ]
  },
  {
    day: "Thursday",
    shows: [
      { time: "10:00-1:00 PM", title: "Community Health Show", presenter: "Sabira & Shahida", type: "featured" },
      { time: "6:00 PM", title: "Crescent Khabarnama", presenter: "Muhammad Afzal", type: "regular" },
      { time: "7:00-9:00 PM", title: "Gup Shup", presenter: "Noaman Hayee", type: "featured" }
    ]
  },
  {
    day: "Friday",
    shows: [
      { time: "10:00-12:00 PM", title: "Crescent NewsRound", presenter: "Humera Haqqani", type: "featured" },
      { time: "12:00-2:00 PM", title: "Islamic Programme", presenter: "Qari Muhammad Abbas", type: "regular" }
    ]
  },
  {
    day: "Saturday",
    shows: [
      { time: "9:00-12:00 PM", title: "Kids Korner", presenter: "Nafisa & Rahat Siddique", type: "featured" },
      { time: "3:00-6:00 PM", title: "Light upon Light", presenter: "Abdur Rehman Hussain", type: "regular" }
    ]
  }
];
