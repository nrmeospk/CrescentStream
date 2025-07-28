import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { weeklySchedule } from "@/data/schedule";

const ScheduleGrid = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
      {weeklySchedule.map((daySchedule) => (
        <Card key={daySchedule.day} className="bg-white shadow-lg">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold text-crescent-green text-center">
              {daySchedule.day}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {daySchedule.shows.map((show, index) => (
              <div 
                key={index}
                className={`border-l-4 pl-3 ${
                  show.type === 'featured' ? 'border-crescent-gold' : 'border-crescent-light'
                }`}
              >
                <div className="text-sm font-semibold text-crescent-green">{show.time}</div>
                <div className="font-medium">{show.title}</div>
                <div className="text-sm text-gray-600">with {show.presenter}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ScheduleGrid;
