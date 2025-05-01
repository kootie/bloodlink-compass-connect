
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BloodGroup } from '@/store/authStore';
import { MessageSquare, Search } from 'lucide-react';

// Mock data - in a real implementation this would come from an API
const mockResults = [
  { id: 'user1', bloodGroup: 'O+', location: 'Nairobi - Westlands', lastDonation: '45 days ago' },
  { id: 'user2', bloodGroup: 'A-', location: 'Nairobi - Karen', lastDonation: '3 months ago' },
  { id: 'user3', bloodGroup: 'B+', location: 'Nairobi - Kilimani', lastDonation: '2 weeks ago' },
  { id: 'user4', bloodGroup: 'O-', location: 'Mombasa - Nyali', lastDonation: '6 months ago' },
  { id: 'user5', bloodGroup: 'AB+', location: 'Kisumu - CBD', lastDonation: 'Never' },
];

const SearchNetwork = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBloodGroup, setSelectedBloodGroup] = useState<string>('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [searching, setSearching] = useState(false);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    setSearching(true);
    
    // Simulate API call
    setTimeout(() => {
      const filteredResults = selectedBloodGroup 
        ? mockResults.filter(r => r.bloodGroup === selectedBloodGroup) 
        : mockResults;
        
      setSearchResults(filteredResults);
      setSearching(false);
    }, 800);
  };
  
  return (
    <div className="container py-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">Search Network</h1>
      <p className="text-muted-foreground mb-6">
        Find blood donors in your area while respecting their privacy
      </p>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Find Blood Donors</CardTitle>
          <CardDescription>
            Search for donors by blood type. All information is anonymized.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/3">
              <Select 
                value={selectedBloodGroup} 
                onValueChange={setSelectedBloodGroup}
              >
                <SelectTrigger id="blood-group">
                  <SelectValue placeholder="Any Blood Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Any Blood Type</SelectItem>
                  <SelectItem value="A+">A+</SelectItem>
                  <SelectItem value="A-">A-</SelectItem>
                  <SelectItem value="B+">B+</SelectItem>
                  <SelectItem value="B-">B-</SelectItem>
                  <SelectItem value="AB+">AB+</SelectItem>
                  <SelectItem value="AB-">AB-</SelectItem>
                  <SelectItem value="O+">O+</SelectItem>
                  <SelectItem value="O-">O-</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="relative w-full">
              <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by location (optional)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button type="submit" disabled={searching} className="md:w-auto">
              {searching ? 'Searching...' : 'Search'}
            </Button>
          </form>
        </CardContent>
      </Card>
      
      {searchResults.length > 0 ? (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Results</h2>
          {searchResults.map((result) => (
            <Card key={result.id} className="overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-20 bg-medical-light flex-shrink-0 flex justify-center items-center p-4 md:p-6">
                  <span className="text-2xl font-bold text-medical-dark">{result.bloodGroup}</span>
                </div>
                <CardContent className="flex-1 flex flex-col md:flex-row justify-between items-start md:items-center p-4">
                  <div>
                    <p className="font-medium">Anonymous Donor</p>
                    <p className="text-sm text-muted-foreground">{result.location}</p>
                    <p className="text-sm">Last donation: {result.lastDonation}</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="mt-4 md:mt-0 flex gap-2"
                  >
                    <MessageSquare className="h-4 w-4" />
                    <span>Contact Anonymously</span>
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
          
          <div className="mt-6 bg-medical-light/20 p-6 rounded-lg border border-medical-light">
            <h3 className="font-semibold mb-2">Blood Donor Network</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Esclapian protects your privacy. When contacting donors, all communication
              is anonymized and no personal contact information is shared unless explicitly 
              permitted by both parties.
            </p>
          </div>
        </div>
      ) : searching ? (
        <div className="text-center py-12">
          <div className="animate-pulse-light inline-block p-4 rounded-full bg-medical-light/20 mb-4">
            <div className="blood-drop"></div>
          </div>
          <p className="font-medium">Searching for donors...</p>
        </div>
      ) : (
        <div className="text-center py-12 blood-cell-bg rounded-lg border border-muted">
          <p className="text-muted-foreground">
            Enter a blood type above to start searching for potential donors.
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchNetwork;
