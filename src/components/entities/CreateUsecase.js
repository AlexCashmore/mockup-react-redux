
export default {
  async run({
              name,
              description,
              packSize,
              price,
              freight,
              subsidised,
            }, axios) {
    const response = {
      success: false,
      errors: {},
      shortId: '',
    };
    try {
      const { data } = await axios.post(`/url/`, {
        name,

        description,

        packSize,

        price,
        freight,
        subsidised });
      response.success = data.success;
      if (!response.success) {
          console.log('end');
      } else {
        response.shortId = data;
      }
    } catch (e) {
      response.success = false;
    }
    return response;
  },
};

