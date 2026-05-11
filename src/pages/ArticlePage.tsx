import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function ArticlePage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/journal', { replace: true });
  }, [navigate]);

  return null;
}
