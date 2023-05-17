module.exports = ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        events: {
          field: "slug",
          references: "name",
        },
      },
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: "dkhbkinyx",
        api_key: "948925533353971",
        api_secret: "Rnqx1YEJvX53SR0RpqFRax95C-s",
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
});
