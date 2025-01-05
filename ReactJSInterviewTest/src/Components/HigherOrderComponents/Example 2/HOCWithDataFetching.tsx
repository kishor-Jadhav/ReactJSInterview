// src/components/withDataFetching.tsx
import React, { useState, useEffect } from 'react';

type WithDataFetchingProps<P> = {
  fetchData: () => Promise<any>;
} & Omit<P, 'data'>;

const HOCWithDataFetching = <P extends object>(WrappedComponent: React.ComponentType<P>, fetchData: () => Promise<any>) => {
  return (props: WithDataFetchingProps<P>) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      fetchData()
        .then(response => {
          setData(response);
          setLoading(false);
        })
        .catch(err => {
          setError(err.message);
          setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return <WrappedComponent {...(props as P)} data={data} />;
  };
};

export default HOCWithDataFetching;
