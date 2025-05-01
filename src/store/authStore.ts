
import { create } from 'zustand';

export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
export type UserRole = 'donor' | 'recipient' | 'doctor' | 'family';

interface UserProfile {
  id: string;
  phone: string;
  bloodGroup?: BloodGroup;
  lastDonationDate?: string;
  eligibleToDonateDays: number;
  role: UserRole;
  assignedProfessionals?: string[];
  location?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  isAnonymous: boolean;
  userProfile: UserProfile | null;
  login: (phone: string, password: string) => Promise<void>;
  loginAnonymously: () => Promise<void>;
  signup: (phone: string, password: string, bloodGroup?: BloodGroup) => Promise<void>;
  logout: () => void;
}

// This is a mock implementation for the MVP
// In a real app, this would connect to a backend service
export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  isAnonymous: false,
  userProfile: null,
  
  login: async (phone, password) => {
    // Mock login - would be replaced with real auth
    console.log('Logging in with:', phone, password);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Mock successful login
    set({
      isAuthenticated: true,
      isAnonymous: false,
      userProfile: {
        id: 'user-123',
        phone,
        bloodGroup: 'O+',
        lastDonationDate: '2023-12-15',
        eligibleToDonateDays: 60,
        role: 'donor',
        location: 'Nairobi - Westlands'
      }
    });
  },
  
  loginAnonymously: async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 600));
    
    set({
      isAuthenticated: true,
      isAnonymous: true,
      userProfile: {
        id: `anon-${Date.now()}`,
        phone: '',
        eligibleToDonateDays: 0,
        role: 'recipient'
      }
    });
  },
  
  signup: async (phone, password, bloodGroup) => {
    // Mock signup - would be replaced with real auth
    console.log('Signing up with:', phone, password, bloodGroup);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    set({
      isAuthenticated: true,
      isAnonymous: false,
      userProfile: {
        id: `user-${Date.now()}`,
        phone,
        bloodGroup: bloodGroup || undefined,
        eligibleToDonateDays: bloodGroup ? 90 : 0, // If blood group is provided, assume eligible
        role: 'donor',
        location: 'Nairobi - Central'
      }
    });
  },
  
  logout: () => {
    set({
      isAuthenticated: false,
      isAnonymous: false,
      userProfile: null
    });
  }
}));
