// 20241008225022
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null

const resList2 = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    pageOffset: {
      nextOffset: "CJpqEJtYKIDIteqo2ZSwVjDIDjgE",
      widgetOffset: {
        restaurantCountWidget: "",
        inlineFacetFilter: "",
        collectionV5RestaurantListWidget_SimRestoRelevance_food: "8",
        collectionV5MastheadWidget: "",
      },
    },
    cards: [
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "81810",
              name: "Tharavadu family restaurant",
              cloudinaryImageId: "vysnsutwqhw2d2td7tjk",
              locality: "Hosur Main Road",
              areaName: "Bommanahalli",
              costForTwo: "₹250 for two",
              cuisines: ["Kerala", "Seafood", "Biryani", "South Indian"],
              avgRating: 4.3,
              parentId: "13245",
              avgRatingString: "4.3",
              totalRatingsString: "23K+",
              promoted: true,
              adTrackingId:
                "cid=19265849~p=0~adgrpid=19265849#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=81810~eid=fbce30f1-c4be-4bf4-8c9b-e50fe1c05228~srvts=1728409824684~collid=83639",
              sla: {
                deliveryTime: 28,
                lastMileTravel: 4.7,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "4.7 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2024-10-08 23:59:00",
                opened: true,
              },
              badges: {
                imageBadges: [
                  {
                    imageId: "Rxawards/_CATEGORY-Coastal.png",
                    description: "Delivery!",
                  },
                ],
              },
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  imageBased: {
                    badgeObject: [
                      {
                        attributes: {
                          description: "Delivery!",
                          imageId: "Rxawards/_CATEGORY-Coastal.png",
                        },
                      },
                    ],
                  },
                  textExtendedBadges: {},
                  textBased: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "50% OFF",
                subHeader: "UPTO ₹100",
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: {
                aggregatedRating: {
                  rating: "--",
                },
              },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              campaignId: "19265849",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=81810&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "229",
              name: "Meghana Foods",
              cloudinaryImageId: "iivuhjc2mswi9lublktf",
              locality: "Koramangala",
              areaName: "Koramangala",
              costForTwo: "₹500 for two",
              cuisines: [
                "Biryani",
                "Andhra",
                "South Indian",
                "Chinese",
                "Seafood",
              ],
              avgRating: 4.6,
              parentId: "635",
              avgRatingString: "4.6",
              totalRatingsString: "177K+",
              sla: {
                deliveryTime: 28,
                lastMileTravel: 1.4,
                serviceability: "SERVICEABLE",
                slaString: "25-30 mins",
                lastMileTravelString: "1.4 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2024-10-09 02:00:00",
                opened: true,
              },
              badges: {
                imageBadges: [
                  {
                    imageId: "Rxawards/_CATEGORY-Biryani.png",
                    description: "Delivery!",
                  },
                ],
              },
              isOpen: true,
              aggregatedDiscountInfoV2: {},
              type: "F",
              badgesV2: {
                entityBadges: {
                  textExtendedBadges: {},
                  textBased: {},
                  imageBased: {
                    badgeObject: [
                      {
                        attributes: {
                          imageId: "Rxawards/_CATEGORY-Biryani.png",
                          description: "Delivery!",
                        },
                      },
                    ],
                  },
                },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: {
                aggregatedRating: {
                  rating: "4.3",
                  ratingCount: "20K+",
                },
                source: "GOOGLE",
                sourceIconImageId:
                  "v1704440323/google_ratings/rating_google_tag",
              },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=229&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "337335",
              name: "Kannur food kitchen",
              cloudinaryImageId: "watevctlyqwgjz0qkbr7",
              locality: "1st  Stage",
              areaName: "BTM Layout",
              costForTwo: "₹200 for two",
              cuisines: ["Kerala", "Biryani", "Beverages"],
              avgRating: 4.1,
              parentId: "114756",
              avgRatingString: "4.1",
              totalRatingsString: "19K+",
              promoted: true,
              adTrackingId:
                "cid=19265875~p=1~adgrpid=19265875#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=337335~eid=e03e46f9-55f1-4e1a-94fa-3d596ac33c38~srvts=1728409824684~collid=83639",
              sla: {
                deliveryTime: 25,
                lastMileTravel: 2.5,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "2.5 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2024-10-08 23:59:00",
                opened: true,
              },
              badges: {
                textExtendedBadges: [
                  {
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                    fontColor: "#7E808C",
                  },
                ],
              },
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {},
                  textExtendedBadges: {
                    badgeObject: [
                      {
                        attributes: {
                          iconId: "guiltfree/GF_Logo_android_3x",
                          description: "",
                          shortDescription: "options available",
                          fontColor: "#7E808C",
                        },
                      },
                    ],
                  },
                },
              },
              aggregatedDiscountInfoV3: {
                header: "50% OFF",
                discountTag: "FLAT DEAL",
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: {
                aggregatedRating: {
                  rating: "--",
                },
              },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              campaignId: "19265875",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=337335&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "252782",
              name: "Aramane Donne Biriyani",
              cloudinaryImageId: "x1oreh7uhjj0h4dyg5ci",
              locality: "8th Block",
              areaName: "Koramangala",
              costForTwo: "₹300 for two",
              cuisines: ["Indian"],
              avgRating: 4.3,
              parentId: "7133",
              avgRatingString: "4.3",
              totalRatingsString: "2.8K+",
              sla: {
                deliveryTime: 22,
                lastMileTravel: 1.4,
                serviceability: "SERVICEABLE",
                slaString: "20-25 mins",
                lastMileTravelString: "1.4 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2024-10-08 23:30:00",
                opened: true,
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {},
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "20% OFF",
                subHeader: "ABOVE ₹2000",
                discountTag: "FLAT DEAL",
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: {
                aggregatedRating: {
                  rating: "--",
                },
              },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=252782&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "523888",
              name: "Biryani Blues",
              cloudinaryImageId: "97377e54937c079fe269d744aa66274a",
              locality: "7th Block",
              areaName: "Koramangala",
              costForTwo: "₹400 for two",
              cuisines: ["Biryani", "Hyderabadi", "Lucknowi", "Kebabs"],
              avgRating: 4.4,
              parentId: "13813",
              avgRatingString: "4.4",
              totalRatingsString: "1.9K+",
              promoted: true,
              adTrackingId:
                "cid=19375303~p=2~adgrpid=19375303#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=523888~eid=0b3fb23a-d217-42f9-baa2-27051f735a45~srvts=1728409824684~collid=83639",
              sla: {
                deliveryTime: 20,
                lastMileTravel: 1.1,
                serviceability: "SERVICEABLE",
                slaString: "15-20 mins",
                lastMileTravelString: "1.1 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2024-10-09 03:00:00",
                opened: true,
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textExtendedBadges: {},
                  textBased: {},
                  imageBased: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "15% OFF",
                subHeader: "ABOVE ₹1000",
                discountTag: "FLAT DEAL",
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: {
                aggregatedRating: {
                  rating: "3.8",
                  ratingCount: "177",
                },
                source: "GOOGLE",
                sourceIconImageId:
                  "v1704440323/google_ratings/rating_google_tag",
              },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              campaignId: "19375303",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=523888&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "387335",
              name: "Biryani By Kilo",
              cloudinaryImageId: "bf9be1c6b9d796850f426281559cb2d2",
              locality: "6th Block",
              areaName: "Koramangala",
              costForTwo: "₹500 for two",
              cuisines: [
                "Biryani",
                "Hyderabadi",
                "Kebabs",
                "Mughlai",
                "Desserts",
              ],
              avgRating: 4.3,
              parentId: "130",
              avgRatingString: "4.3",
              totalRatingsString: "4.5K+",
              sla: {
                deliveryTime: 43,
                lastMileTravel: 0.7,
                serviceability: "SERVICEABLE",
                slaString: "40-45 mins",
                lastMileTravelString: "0.7 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2024-10-09 01:00:00",
                opened: true,
              },
              badges: {
                textExtendedBadges: [
                  {
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                    fontColor: "#7E808C",
                  },
                ],
              },
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  imageBased: {},
                  textExtendedBadges: {
                    badgeObject: [
                      {
                        attributes: {
                          iconId: "guiltfree/GF_Logo_android_3x",
                          description: "",
                          shortDescription: "options available",
                          fontColor: "#7E808C",
                        },
                      },
                    ],
                  },
                  textBased: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "50% OFF",
                subHeader: "UPTO ₹100",
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: {
                aggregatedRating: {
                  rating: "3.8",
                  ratingCount: "536",
                },
                source: "GOOGLE",
                sourceIconImageId:
                  "v1704440323/google_ratings/rating_google_tag",
              },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=387335&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "865836",
              name: "Punjab Grill",
              cloudinaryImageId:
                "FOOD_CATALOG/IMAGES/CMS/2024/5/13/eafe5476-f74c-4508-a962-2bf83c3c5cd4_357c5908-ea78-48e9-8902-e21031a2e9fc.jpeg",
              locality: "Rezervd Parking",
              areaName: "Jayanagar",
              costForTwo: "₹250 for two",
              cuisines: [
                "North Indian",
                "Chinese",
                "Tandoor",
                "Pastas",
                "Snacks",
                "rolls",
                "Kebabs",
                "Desserts",
                "Biryani",
                "Grill",
                "Barbecue",
                "Punjabi",
                "Beverages",
                "Fast Food",
                "Mughlai",
              ],
              avgRating: 3.9,
              parentId: "734",
              avgRatingString: "3.9",
              totalRatingsString: "114",
              promoted: true,
              adTrackingId:
                "cid=19376437~p=4~adgrpid=19376437#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=865836~eid=496c5ff2-642e-4187-bbe9-8f64385e7048~srvts=1728409824684~collid=83639",
              sla: {
                deliveryTime: 35,
                lastMileTravel: 1.3,
                serviceability: "SERVICEABLE",
                slaString: "30-35 mins",
                lastMileTravelString: "1.3 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2024-10-09 01:00:00",
                opened: true,
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {},
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "20% OFF",
                subHeader: "UPTO ₹120",
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: {
                aggregatedRating: {
                  rating: "--",
                },
              },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              campaignId: "19376437",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=865836&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
    ],
    firstOffsetRequest: true,
    nextFetch: 3,
  },
  tid: "fa1bce69-23b8-45a9-bc0f-6f0888f5ce67",
  sid: "gjzb8ad6-94c5-4a52-b9c4-8c3282d0083e",
  deviceId: "3fa2ff08-52f3-5780-efb6-cd18d531ea65",
  csrfToken: "YVoSnMf3Vghe-hB3PkCggCBdaftiPIVIUIb_gHgw",
};

// import {
//   RES_IMG_URL_1,
//   RES_IMG_URL_2,
//   RES_IMG_URL_3,
//   RES_IMG_URL_4,
// } from "./constants";

// const resList = [
//   {
//     id: 1,
//     name: "Kashif Foods",
//     cuisines: "Biryani, Pakistani, Desi",
//     starRating: "3.4",
//     deliveryMinutes: "20",
//     image: RES_IMG_URL_1,
//   },
//   {
//     id: 2,
//     name: "Kababjees Fried Chicken",
//     cuisines: "Burger, English, American",
//     starRating: "4.2",
//     deliveryMinutes: "40",
//     image: RES_IMG_URL_2,
//   },
//   {
//     id: 3,
//     name: "Ginsoy",
//     cuisines: "Noodles, Rice, Chinese",
//     starRating: "4.3",
//     deliveryMinutes: "30",
//     image: RES_IMG_URL_3,
//   },
//   {
//     id: 4,
//     name: "Toasters",
//     cuisines: "Barbecue, Pakistani, Desi",
//     starRating: "3.8",
//     deliveryMinutes: "40",
//     image: RES_IMG_URL_4,
//   },
// ];

export default resList2;
