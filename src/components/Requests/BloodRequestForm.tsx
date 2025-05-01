
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { BloodGroup } from '@/store/authStore';
import { Badge } from '@/components/ui/badge';
import { Share2 } from 'lucide-react';

// Mock data - would come from an API in a real application
const hospitals = [
  { id: 'knh', name: 'Kenyatta National Hospital' },
  { id: 'nairobi', name: 'Nairobi Hospital' },
  { id: 'aga-khan', name: 'Aga Khan University Hospital' },
  { id: 'mater', name: 'Mater Hospital' },
  { id: 'karen', name: 'Karen Hospital' },
];

const BloodRequestForm = () => {
  const [hospital, setHospital] = useState('');
  const [bloodGroup, setBloodGroup] = useState<BloodGroup | ''>('');
  const [urgency, setUrgency] = useState('standard');
  const [quantity, setQuantity] = useState('1');
  const [notes, setNotes] = useState('');
  const [consentShare, setConsentShare] = useState(false);
  const [loading, setLoading] = useState(false);
  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hospital || !bloodGroup) return;
    
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setRequestSubmitted(true);
    }, 1500);
  };
  
  // Handle social sharing
  const handleShare = (platform: 'facebook' | 'twitter' | 'whatsapp') => {
    // Build share text
    const shareText = `Urgent blood donation needed: ${bloodGroup} at ${hospitals.find(h => h.id === hospital)?.name}. Please help if you can donate or share this request.`;
    const shareUrl = window.location.href;
    
    // In a real app, you would use the appropriate share APIs
    // This is just a simplified mock implementation
    let shareLink = '';
    
    switch (platform) {
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case 'whatsapp':
        shareLink = `https://wa.me/?text=${encodeURIComponent(shareText + ' ' + shareUrl)}`;
        break;
    }
    
    if (shareLink) {
      window.open(shareLink, '_blank');
    }
  };
  
  if (requestSubmitted) {
    return (
      <div className="container py-6 max-w-md">
        <Card className="border-blood-light">
          <CardHeader className="bg-blood/10">
            <CardTitle className="text-blood-dark">Request Submitted</CardTitle>
            <CardDescription>
              Your blood request has been submitted and shared with potential donors
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-center mb-6">
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-blood/20 text-blood">
                <div className="blood-drop"></div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Blood Type</span>
                <span className="font-medium">{bloodGroup}</span>
              </div>
              
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Hospital</span>
                <span className="font-medium">
                  {hospitals.find(h => h.id === hospital)?.name}
                </span>
              </div>
              
              <div className="flex justify-between py-2 border-b">
                <span className="text-muted-foreground">Urgency</span>
                <Badge variant={urgency === 'urgent' ? 'destructive' : 'outline'}>
                  {urgency === 'urgent' ? 'Urgent' : 'Standard'}
                </Badge>
              </div>
              
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Units Needed</span>
                <span className="font-medium">{quantity}</span>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-center font-medium mb-4">Share this request</p>
              <div className="flex justify-center gap-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2" 
                  onClick={() => handleShare('twitter')}
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 4.01C21 4.5 20.02 4.69 19 4.82C20.05 4.27 20.82 3.27 21.2 2.14C20.22 2.68 19.14 3.09 18.02 3.28C17.06 2.29 15.72 1.68 14.26 1.68C11.44 1.68 9.15 3.96 9.15 6.75C9.15 7.15 9.19 7.54 9.27 7.91C5.09 7.68 1.39 5.65 -0.26 2.63C-0.67 3.39 -0.91 4.27 -0.91 5.22C-0.91 7 0.05 8.58 1.5 9.49C0.56 9.47 -0.34 9.21 -1.13 8.8V8.85C-1.13 11.31 0.59 13.35 2.88 13.81C2.5 13.92 2.08 13.97 1.64 13.97C1.33 13.97 1.03 13.95 0.75 13.89C1.34 15.89 3.16 17.34 5.29 17.38C3.62 18.72 1.52 19.52 -0.77 19.52C-1.18 19.52 -1.59 19.5 -2 19.45C0.16 20.87 2.7 21.68 5.42 21.68C14.25 21.68 19.08 14.04 19.08 7.39C19.08 7.16 19.08 6.94 19.07 6.72C20.06 6.08 20.95 5.27 21.68 4.34L22 4.01Z" fill="currentColor"/>
                  </svg>
                  <span>Twitter</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2" 
                  onClick={() => handleShare('facebook')}
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.0698C24 5.43539 18.6274 0.0698242 12 0.0698242C5.37258 0.0698242 0 5.43539 0 12.0698C0 18.0745 4.3882 23.0554 10.125 23.9319V15.5654H7.07812V12.0698H10.125V9.44364C10.125 6.41699 11.9166 4.74489 14.6576 4.74489C15.9701 4.74489 17.3438 4.97927 17.3438 4.97927V7.94239H15.8306C14.34 7.94239 13.875 8.87864 13.875 9.83864V12.0698H17.2031L16.6711 15.5654H13.875V23.9319C19.6118 23.0554 24 18.0745 24 12.0698Z" fill="currentColor"/>
                  </svg>
                  <span>Facebook</span>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex items-center gap-2" 
                  onClick={() => handleShare('whatsapp')}
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 23.1C5.9625 23.1 1.05 18.1875 1.05 12.15C1.05 9.5625 1.95 7.0125 3.6 4.95L1.5 0L6.675 2.0625C8.6625 0.9375 10.275 0.375 12 0.375C18.0375 0.375 22.95 5.2875 22.95 11.325C22.95 17.3625 18.0375 22.275 12 22.275V23.1C12 23.1 12 23.1 12 23.1ZM8.2875 6.6375L7.95 6.4875C6.8625 6.0375 6.0375 5.8125 5.25 6.375C4.6875 6.75 3.7125 7.8 3.7125 9.3C3.7125 10.875 4.95 12.375 5.1375 12.6375C5.1375 12.6375 5.1375 12.6375 5.1375 12.6375C5.325 12.9 7.6125 16.5 11.475 17.925C12.3375 18.225 13.0125 18.375 13.5375 18.4875C14.4 18.675 15.1875 18.6375 15.8125 18.525C16.5 18.3975 17.775 17.5125 18.075 16.6875C18.375 15.8625 18.375 15.1875 18.3 15.0375L18.1125 14.9625C17.925 14.8875 17.5125 14.7375 16.6875 14.325C15.8625 13.9125 15.1125 13.5 14.925 13.5C14.85 13.5 14.775 13.5375 14.7 13.5375C14.5125 13.65 13.65 14.4 13.5 14.625C13.425 14.7375 13.275 14.8125 13.1625 14.8125H13.0875C12.975 14.8125 12.675 14.775 12.375 14.7C11.85 14.55 11.1 14.175 10.4625 13.5375C9.6 12.7875 9.075 11.925 8.925 11.625C8.8875 11.55 8.8875 11.475 8.8875 11.475C8.8875 11.475 9.075 11.2875 9.15 11.1375C9.225 11.0625 9.3 10.95 9.375 10.875C9.45 10.8 9.4875 10.6875 9.525 10.575C9.6 10.425 9.6 10.3125 9.5625 10.2L9.45 10.05C9.3 9.75 9.15 9.45 9 9.15C8.85 8.8875 8.7 8.625 8.625 8.475L8.5125 8.2875C8.475 8.2125 8.4375 8.1 8.4 8.025C8.325 7.875 8.2875 7.7625 8.25 7.6125C8.25 7.35 8.325 7.125 8.475 6.9L8.5125 6.8625C8.625 6.75 8.8125 6.6375 8.8125 6.6375H8.2875Z" fill="currentColor"/>
                  </svg>
                  <span>WhatsApp</span>
                </Button>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={() => setRequestSubmitted(false)}
            >
              Create Another Request
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="container py-6 max-w-md">
      <h1 className="text-3xl font-bold mb-2">Request Blood</h1>
      <p className="text-muted-foreground mb-6">
        Create a request for blood donation from verified institutions
      </p>
      
      <Card>
        <CardHeader>
          <CardTitle>Blood Request Form</CardTitle>
          <CardDescription>
            Fill in the details to find potential donors. All personal information remains private.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="hospital">Hospital/Institution</Label>
              <Select 
                value={hospital} 
                onValueChange={setHospital}
              >
                <SelectTrigger id="hospital">
                  <SelectValue placeholder="Select Hospital" />
                </SelectTrigger>
                <SelectContent>
                  {hospitals.map(hospital => (
                    <SelectItem key={hospital.id} value={hospital.id}>
                      {hospital.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <p className="text-xs text-muted-foreground">
                Only verified healthcare institutions are available
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="blood-group">Required Blood Group</Label>
              <Select 
                value={bloodGroup} 
                onValueChange={(value) => setBloodGroup(value as BloodGroup)}
              >
                <SelectTrigger id="blood-group">
                  <SelectValue placeholder="Select Blood Group" />
                </SelectTrigger>
                <SelectContent>
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
            
            <div className="space-y-2">
              <Label htmlFor="urgency">Urgency</Label>
              <Select value={urgency} onValueChange={setUrgency}>
                <SelectTrigger id="urgency">
                  <SelectValue placeholder="Select Urgency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="urgent">Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="quantity">Units Needed</Label>
              <Select value={quantity} onValueChange={setQuantity}>
                <SelectTrigger id="quantity">
                  <SelectValue placeholder="Select Quantity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 Unit</SelectItem>
                  <SelectItem value="2">2 Units</SelectItem>
                  <SelectItem value="3">3 Units</SelectItem>
                  <SelectItem value="4">4+ Units</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="notes">Additional Notes (Optional)</Label>
              <Textarea 
                id="notes" 
                value={notes} 
                onChange={(e) => setNotes(e.target.value)} 
                placeholder="Any specific requirements or information for donors"
                className="resize-none"
              />
            </div>
            
            <div className="flex items-center space-x-2 pt-4">
              <Checkbox 
                id="consent" 
                checked={consentShare} 
                onCheckedChange={(checked) => setConsentShare(checked as boolean)} 
              />
              <Label htmlFor="consent" className="text-sm">
                I consent to sharing this request on social media without revealing my personal details
              </Label>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button 
            onClick={handleSubmit}
            className="w-full" 
            disabled={!hospital || !bloodGroup || loading}
          >
            {loading ? 'Submitting Request...' : 'Submit Request'}
          </Button>
          
          <div className="relative w-full">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-muted" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">or</span>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            type="button"
            className="w-full flex items-center gap-2"
            disabled={!consentShare || !hospital || !bloodGroup}
          >
            <Share2 className="h-4 w-4" />
            <span>Share to Social Media</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BloodRequestForm;
