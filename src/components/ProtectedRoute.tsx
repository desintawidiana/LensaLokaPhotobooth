import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../utils/store';
export function ProtectedRoute({ children }: {children: React.ReactNode;}) {
  const user = auth.getCurrentUser();
  if (!user) {
    return <Navigate to="/auth" replace />;
  }
  return <>{children}</>;
}