import React, { useEffect, useState } from 'react';

function withData(Component, get) {
  // return class extends Component {
  // }
  // return function() {
  // }

  const EnhancedComponent = (props) => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
      const getData = async () => {
        setLoading(true);
        const data = await get();
        // const jsonData = await data.json();
        setData(data);
        setLoading(false);
      };
      getData();
    }, [])

    return (
      loading
        ? <div>Loading...</div>
        : <Component data={data} {...props} />
    );
  }

  return EnhancedComponent;
}

export default withData;