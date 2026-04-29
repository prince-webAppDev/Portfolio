import React from 'react';

interface PlaceholderPageProps {
  name: string;
}

const PlaceholderPage = ({ name }: PlaceholderPageProps) => {
  return (
    <div style={{ 
      padding: '100px 20px', 
      textAlign: 'center', 
      height: '100vh', 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center',
      background: '#000',
      color: '#fff'
    }}>
      <h1 style={{ fontSize: '5rem', fontWeight: 'bold', textTransform: 'uppercase' }}>{name}</h1>
      <p style={{ marginTop: '20px', fontSize: '1.2rem', opacity: 0.7 }}>Content for this page will be added soon.</p>
    </div>
  );
};

export default PlaceholderPage;
