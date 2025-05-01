
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BloodGroup } from '@/store/authStore';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface BloodGroupCardProps {
  bloodGroup: BloodGroup | undefined;
  lastDonationDate?: string;
  eligibleToDonateDays: number;
}

const BloodGroupCard: React.FC<BloodGroupCardProps> = ({ 
  bloodGroup, 
  lastDonationDate, 
  eligibleToDonateDays 
}) => {
  // Calculate donation eligibility percentage
  const eligibilityPercentage = Math.min(Math.max((90 - eligibleToDonateDays) / 90 * 100, 0), 100);
  
  // Format date for display
  const formattedDate = lastDonationDate 
    ? new Date(lastDonationDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    : 'No record';

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex justify-between items-center">
          <span>Your Blood Type</span>
          {bloodGroup ? (
            <span className="text-3xl font-bold text-blood">{bloodGroup}</span>
          ) : (
            <span className="text-sm italic text-muted-foreground">Not provided</span>
          )}
        </CardTitle>
        <CardDescription>
          {bloodGroup ? 'Your donation can help save lives' : 'Add your blood type to find matches'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {bloodGroup && (
          <>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-1 text-sm">
                <span>Donation Eligibility</span>
                <span className="font-medium">
                  {eligibleToDonateDays <= 0 
                    ? 'Eligible now' 
                    : `${eligibleToDonateDays} days remaining`}
                </span>
              </div>
              <Progress 
                value={eligibilityPercentage} 
                className={cn("h-2", eligibleToDonateDays <= 0 ? "bg-green-500" : "")}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm mt-4">
              <div>
                <p className="text-muted-foreground">Last Donation</p>
                <p className="font-medium">{formattedDate}</p>
              </div>
              <div className="text-right">
                <p className="text-muted-foreground">Compatible With</p>
                <p className="font-medium">
                  {bloodGroup === 'O-' && 'All Blood Types'}
                  {bloodGroup === 'O+' && 'O+, A+, B+, AB+'}
                  {bloodGroup === 'A-' && 'A-, A+, AB-, AB+'}
                  {bloodGroup === 'A+' && 'A+, AB+'}
                  {bloodGroup === 'B-' && 'B-, B+, AB-, AB+'}
                  {bloodGroup === 'B+' && 'B+, AB+'}
                  {bloodGroup === 'AB-' && 'AB-, AB+'}
                  {bloodGroup === 'AB+' && 'AB+ only'}
                </p>
              </div>
            </div>
          </>
        )}
        
        {!bloodGroup && (
          <div className="py-6 text-center">
            <div className="blood-drop mx-auto mb-4"></div>
            <p className="text-muted-foreground mb-2">
              Add your blood group to see donation eligibility 
              and find compatible donors
            </p>
            <Button variant="outline" size="sm" className="mt-2">
              Update Profile
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BloodGroupCard;
