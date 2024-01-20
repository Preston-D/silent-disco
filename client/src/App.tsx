import * as React from 'react';
import AppRoutes  from './AppRoutes'
import './App.css'

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <AppRoutes />
  );
}
