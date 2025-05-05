
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { format, isSameDay } from 'date-fns';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

// Sample event data (in real app, this would come from an API or database)
const eventsData = [
  {
    id: 1,
    title: 'Blood Donation Drive',
    date: new Date(2025, 4, 10),
    location: 'City Hospital',
    description: 'Annual blood donation drive to support hospital reserves.',
    organizer: 'City Hospital',
    type: 'donation'
  },
  {
    id: 2,
    title: 'Blood Type Awareness Workshop',
    date: new Date(2025, 4, 15),
    location: 'Community Center',
    description: 'Learn about different blood types and compatibility.',
    organizer: 'Health Education Department',
    type: 'education'
  },
  {
    id: 3,
    title: 'Emergency Response Training',
    date: new Date(2025, 4, 20),
    location: 'Medical School Auditorium',
    description: 'Training for medical professionals on emergency blood transfusions.',
    organizer: 'Medical School',
    type: 'training'
  },
  {
    id: 4,
    title: 'Blood Research Symposium',
    date: new Date(2025, 4, 25),
    location: 'Research Center',
    description: 'Latest findings in blood research and treatment methodologies.',
    organizer: 'National Medical Research',
    type: 'research'
  },
  {
    id: 5, 
    title: 'Mobile Blood Bank',
    date: new Date(2025, 4, 7), 
    location: 'Downtown Plaza',
    description: 'Mobile blood collection unit available for donations.',
    organizer: 'Regional Blood Bank',
    type: 'donation'
  }
];

// Function to get events for a specific date
const getEventsForDate = (date: Date) => {
  return eventsData.filter(event => isSameDay(event.date, date));
};

// Function to get all dates that have events
const getDatesWithEvents = () => {
  return eventsData.map(event => event.date);
};

const EventCard = ({ event }: { event: typeof eventsData[0] }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Different colors based on event type
  const getTypeColor = (type: string) => {
    switch(type) {
      case 'donation': return 'bg-blood/10 text-blood';
      case 'education': return 'bg-medical-light/30 text-medical-dark';
      case 'training': return 'bg-amber-100 text-amber-800';
      case 'research': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <Card className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg">{event.title}</CardTitle>
            <CardDescription>{format(event.date, 'EEEE, MMMM d, yyyy')}</CardDescription>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(event.type)}`}>
            {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
          </span>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm mb-1"><strong>Location:</strong> {event.location}</p>
        <p className="text-sm"><strong>Organizer:</strong> {event.organizer}</p>
      </CardContent>
      <CardFooter className="flex justify-between pt-0">
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="p-0 h-auto text-medical-dark">
              {isOpen ? 'Show Less' : 'Show More'}
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="text-sm mt-2">
            <p>{event.description}</p>
          </CollapsibleContent>
        </Collapsible>
        <HoverCard>
          <HoverCardTrigger asChild>
            <Button variant="outline" size="sm">Register</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-medium">Quick Registration</h4>
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Your email" />
              </div>
              <Button size="sm" className="w-full">Submit</Button>
            </div>
          </HoverCardContent>
        </HoverCard>
      </CardFooter>
    </Card>
  );
};

const Events = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  
  const eventsForSelectedDate = selectedDate ? getEventsForDate(selectedDate) : [];
  const datesWithEvents = getDatesWithEvents();
  
  // Custom day rendering to highlight days with events
  const renderDay = (day: Date) => {
    const hasEvent = datesWithEvents.some(eventDate => isSameDay(eventDate, day));
    
    return (
      <div className={cn(
        "relative w-full h-full",
        hasEvent && "font-bold"
      )}>
        {day.getDate()}
        {hasEvent && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blood rounded-full"></div>
        )}
      </div>
    );
  };

  // Navigate to previous/next month
  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(date);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setDate(newDate);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-medical-dark">Blood Donation Events</h1>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Calendar Section */}
          <div className="md:w-1/2 lg:w-2/5">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>Event Calendar</CardTitle>
                  <div className="flex space-x-1">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => navigateMonth('prev')}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" size="sm">
                          <CalendarIcon className="h-4 w-4 mr-2" />
                          {format(date, 'MMMM yyyy')}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={(newDate) => {
                            if (newDate) setDate(newDate);
                          }}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => navigateMonth('next')}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  month={date}
                  className="pointer-events-auto"
                  components={{
                    Day: ({ date: dayDate }) => renderDay(dayDate),
                  }}
                />
              </CardContent>
              <CardFooter>
                <div className="flex space-x-4 text-xs text-muted-foreground">
                  <div className="flex items-center">
                    <div className="mr-1.5 h-2 w-2 rounded-full bg-blood"></div>
                    <span>Event Available</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-1.5 h-2 w-2 rounded-full bg-gray-300"></div>
                    <span>No Events</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          
          {/* Events List Section */}
          <div className="md:w-1/2 lg:w-3/5">
            <Card>
              <CardHeader>
                <CardTitle>
                  {selectedDate ? (
                    `Events for ${format(selectedDate, 'MMMM d, yyyy')}`
                  ) : (
                    'Select a date to view events'
                  )}
                </CardTitle>
                <CardDescription>
                  {eventsForSelectedDate.length === 0 
                    ? 'No events scheduled for this date.' 
                    : `${eventsForSelectedDate.length} event(s) found`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {eventsForSelectedDate.length === 0 ? (
                    <div className="text-center py-12">
                      <CalendarIcon className="mx-auto h-12 w-12 text-muted-foreground opacity-50" />
                      <p className="mt-4 text-muted-foreground">No events scheduled for this date.</p>
                      <Button 
                        variant="outline" 
                        className="mt-4"
                        onClick={() => setSelectedDate(datesWithEvents[0])}
                      >
                        View Next Available Event
                      </Button>
                    </div>
                  ) : (
                    eventsForSelectedDate.map(event => (
                      <EventCard key={event.id} event={event} />
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
