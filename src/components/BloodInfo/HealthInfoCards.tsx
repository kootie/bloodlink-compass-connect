
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

const HealthInfoCards = () => {
  return (
    <div className="container py-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">Blood Health Information</h1>
      <p className="text-muted-foreground mb-6">
        Learn about blood groups and their impact on health and wellness
      </p>
      
      <Tabs defaultValue="basics" className="w-full">
        <TabsList className="mb-4 flex w-full overflow-x-auto">
          <TabsTrigger value="basics">Blood Basics</TabsTrigger>
          <TabsTrigger value="types">Blood Types</TabsTrigger>
          <TabsTrigger value="health">Health Impact</TabsTrigger>
          <TabsTrigger value="diet">Diet & Nutrition</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basics" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>What is Blood?</CardTitle>
                <CardDescription>The vital fluid that keeps us alive</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Blood is a specialized body fluid composed of red blood cells, white blood cells, and platelets suspended in plasma. It delivers essential nutrients and oxygen to cells and carries waste products away.
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside">
                  <li className="text-sm">
                    <span className="font-medium">Red blood cells</span> - Carry oxygen throughout the body
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">White blood cells</span> - Help fight infections
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Platelets</span> - Help in blood clotting
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Plasma</span> - Liquid component carrying cells and nutrients
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Blood Donation Facts</CardTitle>
                <CardDescription>Important information for donors</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-medical-light flex items-center justify-center text-medical-dark font-medium text-sm">1</div>
                    <p className="text-sm">
                      <span className="font-medium">One donation can save up to 3 lives</span> - Blood is separated into red cells, platelets and plasma.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-medical-light flex items-center justify-center text-medical-dark font-medium text-sm">2</div>
                    <p className="text-sm">
                      <span className="font-medium">Most donors can give every 3 months</span> - Your body replaces the fluid in 24 hours and red cells in about 4-6 weeks.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-medical-light flex items-center justify-center text-medical-dark font-medium text-sm">3</div>
                    <p className="text-sm">
                      <span className="font-medium">Donation takes only about 10-15 minutes</span> - The entire process takes about an hour, including registration and refreshments.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-medical-light flex items-center justify-center text-medical-dark font-medium text-sm">4</div>
                    <p className="text-sm">
                      <span className="font-medium">Blood has a limited shelf life</span> - Red blood cells can be stored for 42 days; platelets only 5 days.
                    </p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="types" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="bg-blood/10">
                <div className="flex justify-between items-center">
                  <CardTitle>Blood Group Compatibility</CardTitle>
                  <div className="blood-drop"></div>
                </div>
                <CardDescription>
                  Understanding which blood types are compatible for transfusions
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ScrollArea className="h-72">
                  <div className="space-y-4">
                    <div className="p-3 border rounded-md">
                      <h3 className="font-medium mb-1">Type O-</h3>
                      <p className="text-sm text-muted-foreground mb-2">Universal donor</p>
                      <div className="flex gap-1 flex-wrap">
                        <Badge className="bg-blood">Can donate to: All blood types</Badge>
                        <Badge variant="outline">Can receive from: O- only</Badge>
                      </div>
                    </div>
                    
                    <div className="p-3 border rounded-md">
                      <h3 className="font-medium mb-1">Type O+</h3>
                      <p className="text-sm text-muted-foreground mb-2">Most common blood type</p>
                      <div className="flex gap-1 flex-wrap">
                        <Badge className="bg-blood">Can donate to: O+, A+, B+, AB+</Badge>
                        <Badge variant="outline">Can receive from: O+, O-</Badge>
                      </div>
                    </div>
                    
                    <div className="p-3 border rounded-md">
                      <h3 className="font-medium mb-1">Type A-</h3>
                      <p className="text-sm text-muted-foreground mb-2">Less common type</p>
                      <div className="flex gap-1 flex-wrap">
                        <Badge className="bg-blood">Can donate to: A-, A+, AB-, AB+</Badge>
                        <Badge variant="outline">Can receive from: A-, O-</Badge>
                      </div>
                    </div>
                    
                    <div className="p-3 border rounded-md">
                      <h3 className="font-medium mb-1">Type A+</h3>
                      <p className="text-sm text-muted-foreground mb-2">Second most common type</p>
                      <div className="flex gap-1 flex-wrap">
                        <Badge className="bg-blood">Can donate to: A+, AB+</Badge>
                        <Badge variant="outline">Can receive from: A+, A-, O+, O-</Badge>
                      </div>
                    </div>
                    
                    <div className="p-3 border rounded-md">
                      <h3 className="font-medium mb-1">Type B-</h3>
                      <p className="text-sm text-muted-foreground mb-2">Rare blood type</p>
                      <div className="flex gap-1 flex-wrap">
                        <Badge className="bg-blood">Can donate to: B-, B+, AB-, AB+</Badge>
                        <Badge variant="outline">Can receive from: B-, O-</Badge>
                      </div>
                    </div>
                    
                    <div className="p-3 border rounded-md">
                      <h3 className="font-medium mb-1">Type B+</h3>
                      <p className="text-sm text-muted-foreground mb-2">Less common type</p>
                      <div className="flex gap-1 flex-wrap">
                        <Badge className="bg-blood">Can donate to: B+, AB+</Badge>
                        <Badge variant="outline">Can receive from: B+, B-, O+, O-</Badge>
                      </div>
                    </div>
                    
                    <div className="p-3 border rounded-md">
                      <h3 className="font-medium mb-1">Type AB-</h3>
                      <p className="text-sm text-muted-foreground mb-2">Very rare blood type</p>
                      <div className="flex gap-1 flex-wrap">
                        <Badge className="bg-blood">Can donate to: AB-, AB+</Badge>
                        <Badge variant="outline">Can receive from: AB-, A-, B-, O-</Badge>
                      </div>
                    </div>
                    
                    <div className="p-3 border rounded-md">
                      <h3 className="font-medium mb-1">Type AB+</h3>
                      <p className="text-sm text-muted-foreground mb-2">Universal recipient</p>
                      <div className="flex gap-1 flex-wrap">
                        <Badge className="bg-blood">Can donate to: AB+ only</Badge>
                        <Badge variant="outline">Can receive from: All blood types</Badge>
                      </div>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Blood Type Distribution</CardTitle>
                <CardDescription>
                  Global blood type prevalence varies by region and ethnicity
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>O+</span>
                      <span className="font-medium">38%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-blood" style={{ width: '38%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>A+</span>
                      <span className="font-medium">34%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-blood" style={{ width: '34%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>B+</span>
                      <span className="font-medium">9%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-blood" style={{ width: '9%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>AB+</span>
                      <span className="font-medium">3%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-blood" style={{ width: '3%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>O-</span>
                      <span className="font-medium">7%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-blood" style={{ width: '7%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>A-</span>
                      <span className="font-medium">6%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-blood" style={{ width: '6%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>B-</span>
                      <span className="font-medium">2%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-blood" style={{ width: '2%' }}></div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>AB-</span>
                      <span className="font-medium">1%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-blood" style={{ width: '1%' }}></div>
                    </div>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground mt-4">
                  Note: Percentages are approximate and vary by population
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="health" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Blood Type & Disease Risk</CardTitle>
                <CardDescription>Correlations between blood types and health risks</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="text-sm">
                    <span className="font-medium">Type A:</span> Higher risk for heart disease, gastric cancer
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Type B:</span> Increased risk for pancreatic cancer, lower risk for heart disease
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Type AB:</span> Higher cognitive impairment risk, higher risk for pancreatic cancer
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Type O:</span> Lower risk for heart disease, higher risk for ulcers
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground mt-4">
                  Note: These are statistical correlations, not definitive predictions
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Blood Type & Stress Response</CardTitle>
                <CardDescription>Different types handle stress differently</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="text-sm">
                    <span className="font-medium">Type A:</span> Typically produce more cortisol in response to stress, may be more susceptible to anxiety and stress-related conditions
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Type O:</span> Often produce more adrenaline in response to stress, may take longer to recover from stress but show more resilience
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Type B & AB:</span> Generally show more balanced stress responses than types A and O
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Blood Type & Immunity</CardTitle>
                <CardDescription>Blood type influence on immune response</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="text-sm">
                    <span className="font-medium">Type A:</span> May have higher risk for smallpox and COVID-19
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Type O:</span> Potential resistance to malaria, lower risk for severe COVID-19
                  </li>
                  <li className="text-sm">
                    <span className="font-medium">Rh factor:</span> Rh positive individuals may have some immune advantages against certain parasitic infections
                  </li>
                </ul>
                <div className="mt-4 p-3 bg-muted/50 rounded-md text-xs">
                  <strong>Important:</strong> Research in this area is ongoing and many findings are preliminary. Consult healthcare professionals for medical advice.
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="diet" className="mt-0">
          <Card>
            <CardHeader>
              <CardTitle>Blood Type Diet Theory</CardTitle>
              <CardDescription>
                Popular but scientifically unproven dietary approach based on blood types
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-3">Type A Diet Suggestions</h3>
                  <div className="p-3 bg-neutral-light rounded-md mb-3">
                    <h4 className="font-medium text-sm mb-1">Suggested Foods</h4>
                    <p className="text-sm text-muted-foreground">
                      Plant-based diet, fruits, vegetables, legumes, whole grains, limited fish
                    </p>
                  </div>
                  <div className="p-3 bg-neutral-light rounded-md">
                    <h4 className="font-medium text-sm mb-1">Foods to Avoid</h4>
                    <p className="text-sm text-muted-foreground">
                      Red meat, dairy, kidney beans, lima beans, wheat
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Type B Diet Suggestions</h3>
                  <div className="p-3 bg-neutral-light rounded-md mb-3">
                    <h4 className="font-medium text-sm mb-1">Suggested Foods</h4>
                    <p className="text-sm text-muted-foreground">
                      Balanced omnivorous diet, dairy, meat, fruits, vegetables
                    </p>
                  </div>
                  <div className="p-3 bg-neutral-light rounded-md">
                    <h4 className="font-medium text-sm mb-1">Foods to Avoid</h4>
                    <p className="text-sm text-muted-foreground">
                      Chicken, corn, lentils, peanuts, sesame seeds
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Type AB Diet Suggestions</h3>
                  <div className="p-3 bg-neutral-light rounded-md mb-3">
                    <h4 className="font-medium text-sm mb-1">Suggested Foods</h4>
                    <p className="text-sm text-muted-foreground">
                      Mixed diet with seafood, tofu, dairy, green vegetables
                    </p>
                  </div>
                  <div className="p-3 bg-neutral-light rounded-md">
                    <h4 className="font-medium text-sm mb-1">Foods to Avoid</h4>
                    <p className="text-sm text-muted-foreground">
                      Red meat, kidney beans, seeds, corn, buckwheat
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-3">Type O Diet Suggestions</h3>
                  <div className="p-3 bg-neutral-light rounded-md mb-3">
                    <h4 className="font-medium text-sm mb-1">Suggested Foods</h4>
                    <p className="text-sm text-muted-foreground">
                      High protein, meat-rich diet, seafood, vegetables, limited grains
                    </p>
                  </div>
                  <div className="p-3 bg-neutral-light rounded-md">
                    <h4 className="font-medium text-sm mb-1">Foods to Avoid</h4>
                    <p className="text-sm text-muted-foreground">
                      Dairy, wheat, corn, lentils, cabbage, cauliflower
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 border border-muted rounded-md">
                <h3 className="font-medium mb-2">Scientific Perspective</h3>
                <p className="text-sm text-muted-foreground">
                  While the blood type diet has many proponents, it lacks strong scientific evidence. Most nutritionists and medical researchers do not support its claims. The beneficial effects reported by followers may result from generally healthier eating rather than blood type-specific responses.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Always consult healthcare professionals before making significant dietary changes.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">Download Complete Diet Guide</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// For TypeScript support
import { Badge } from '@/components/ui/badge';

export default HealthInfoCards;
