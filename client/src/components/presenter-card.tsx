import { Card, CardContent } from "@/components/ui/card";
import { Presenter } from "@/data/presenters";

interface PresenterCardProps {
  presenter: Presenter;
}

const PresenterCard = ({ presenter }: PresenterCardProps) => {
  return (
    <Card className="bg-gray-50 hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6 text-center">
        <img 
          src={presenter.imageUrl} 
          alt={presenter.name}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-crescent-gold"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400";
          }}
        />
        <h3 className="text-xl font-bold text-crescent-green mb-2">{presenter.name}</h3>
        <p className="text-crescent-gold font-semibold mb-3">{presenter.show}</p>
        <p className="text-sm text-gray-600 mb-3">{presenter.schedule}</p>
        <p className="text-sm text-gray-700 leading-relaxed">{presenter.description}</p>
      </CardContent>
    </Card>
  );
};

export default PresenterCard;
