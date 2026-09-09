import React from "react";
import ReactDOM from "react-dom/client";

//Header
//-logo
//-items(Home,About us, cart)
//Body
//-search
//-rest cards(img, restName,cuisine, price,time)
//Footer
//-contact
//-links

const Appheader = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://img.freepik.com/premium-vector/burger-vector-illustration-flat-hamburger-icon-logo-design_1058532-20232.jpg" alt="burger" />
                <h3 className="name">CraveLy</h3>
            </div>
            <div className="items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li className="cart-logo">🛒Cart</li>
                </ul>
            </div>
        </div>
    );
};

const ResCard = (props) => {
    const {resData} = props

    const {image, name, cuisine, rating, locality } = resData?.info

    return (
        <div className="res-card">
            <img className="dosa-cafe" alt="cuisine" src={image.url}/>
            <h3>{name}</h3>
            <p>{cuisine.map((item) => item.name).join(", ")}</p>
            <h4>⭐{rating.aggregate_rating}</h4>
            <p>{locality.name}</p>
        </div>
    )
}


const resList =  [
            {
                "type": "restaurant",
                "info": {
                    "resId": 18884150,
                    "name": "2BHK Diner & Key Club",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/0\/18884150\/85a7c44f610416452fff747c248255d1_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/0\/18884150\/85a7c44f610416452fff747c248255d1_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/0\/18884150\/b1cbcb073058ffc8281d6cc2fe6c002d_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.1",
                        "rating_text": "4.1",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "4,523",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.5",
                                "reviewCount": "4,429",
                                "reviewTextSmall": "4,429 Reviews",
                                "subtext": "4,429 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.5",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "800"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "3.7",
                                "reviewCount": "94",
                                "reviewTextSmall": "94 Reviews",
                                "subtext": "94 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "3.7",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b93,000 for two"
                    },
                    "cfo": {
                        "text": "\u20b91,200 for one"
                    },
                    "locality": {
                        "name": "Bund Garden Road, Pune",
                        "address": "Unit 7, Raja Bahadur International Mills Limited, Pune Station, Near Sheraton Grand, Bund Garden Road, Pune",
                        "localityUrl": "pune\/bund-garden-road-restaurants"
                    },
                    "timing": {
                        "text": "Opens at 6pm",
                        "color": "#ab000d"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/mediterranean\/",
                            "name": "Mediterranean"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzhcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/european\/",
                            "name": "European"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcxXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/finger-food\/",
                            "name": "Finger Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/italian\/",
                            "name": "Italian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMVwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/american\/",
                            "name": "American"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/beverages\/",
                            "name": "Beverages"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b93,000 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 10,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "10% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/pune\/2bhk-diner-key-club-bund-garden\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "2 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"campaign_id\":\"18706322\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"5\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"18884150\",\"isNewAd\":\"34\",\"ad_position\":\"10\",\"slider_position\":\"10\",\"slider_sequence\":\"10\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"encrypted_data\":\"6AXxlpGSH+T9DnXvSsMP\/HV2Cd2DshBsTTdtVziw9IPHHm\/4KgJWXUdVl1xcwqjpG7PRBR+OACvcz5C19D8PpdnqbqEcDAk1D9iuhn0hvi2fXgZZtgXFFXPTC2FS599BSqd5Joq69FpNJMrgOT61Jper+V50k82P+F+Zp2F\/63CKdUpxO\/2jKnJRoY2Ysl4va56XskIgv2tLYYXd89w8bNoKJWrb2lTYjyjpIfF+ErkFiC41av5oGAWi8uXKn4BPYZewsgg5vz+T0e97B7CUsm+pq2EVVjbnY0HY7Ai9M5Fs+jxbkpcIaNiRlamRHZsMk5sxYL8JjRYD\/x6Dt+q03Xum0Taks40IcGegoqBTdvOUaVQVsOuDZnbFUczlIWQYey2jD\/cthDWDwFqO5YA9ki1RPdGa8E5qmW2zGzuzj9eCW3gdwbdWNIkMwHL3C+NOu3Vx+a1rK8S27rqDzagouezeeJzs55hboOOs69NobpLEDkGdBpBDr3g4FqTphZfEHUImGA\/+ichOUj6pjhd5VAy+bqZlsqnuXvKIPyPHeorgDuHbvB7lsKzPl0O9JnNtvcwBPH0m4YQTEAexw0gVnUgknWIpc0reEZGsS9WshTJojCzrri0wFUSP+texAn8C5lGABHhbmZNQsKi42XwuZ0xbCkLiu\/WFGaYXqERfYLh\/A7u3Ol4jSLbkf5mRSxfYlQi6F5LcxOhgbBMxifDLikunzysHz1ieih5tgHVrHhHJLFI1gw0ccWi6jOgnv42JSQKVuyHuIS2gBOuBxT1pQiL421kg+W9PrkOARyGJTBbNB4UOcei\/e9ru\/nlbD9PK7OfFBUwrQwWnrMUdk6w=\",\"key_version\":\"13b17d83-e1f1-4d23-90b8-4642e54206d1\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"metadata\":{\"is_ad\":\"true\"},\"entity_type\":\"restaurant\",\"location_id\":\"4306215736965070848\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"search_id\":\"a6909374-354e-4706-ab56-2fda2805fd33\",\"request_id\":\"29c82e1d-164e-4cdd-b9d6-6f4b867c7cf3\",\"entity_id\":\"18884150\",\"element_type\":\"listing\",\"location_type\":\"delivery_cell\",\"rank\":10}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 21999531,
                    "name": "La Casetta",
                    "image": {
                        "url": "https://b.zmtcdn.com/data/reviews_photos/be5/11ffe5fc6b7e6f8bbe776479a1500be5_1782382128.jpg?fit=around|960:500&crop=960:500;*,*",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/images\/res_avatar_476_320_1x_new.png?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": false
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.5",
                        "rating_text": "4.5",
                        "rating_subtitle": "Excellent",
                        "rating_color": "3F7E00",
                        "votes": "406",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.5",
                                "reviewCount": "406",
                                "reviewTextSmall": "406 Reviews",
                                "subtext": "406 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.5",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "800"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Delivery",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "100"
                                },
                                "textColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,500 for two"
                    },
                    "cfo": {
                        "text": "\u20b9600 for one"
                    },
                    "locality": {
                        "name": "Deccan Gymkhana, Pune",
                        "address": "60, Prabhat Road, Opposite Indian Bank, Deccan Gymkhana, Pune",
                        "localityUrl": "pune\/deccan-gymkhana-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/pizza\/",
                            "name": "Pizza"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/italian\/",
                            "name": "Italian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/pasta\/",
                            "name": "Pasta"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
                            "name": "Desserts"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,500 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/pune\/la-casetta-deccan-gymkhana\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "1.8 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"campaign_id\":\"18733205\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"5\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"21999531\",\"isNewAd\":\"34\",\"ad_position\":\"11\",\"slider_position\":\"11\",\"slider_sequence\":\"11\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"encrypted_data\":\"DmXMnsmm4HW50JqNN6LOqCEscK38zBlxZFu9oXofcE8xvyIJlALaGKialzFylZPIVvSHZBD7kekPEP2mLinzaDUuEWkYu4CdsDmngCHFQ8FckDUwW8npqj6slc3NhfjSDe0pMuXehAGM755hrRs4FUeZ\/RftVMCsgOHeuzfaKs1vibKI6VhlxIXCeP9Sp+E9tMv\/O9mldqfshI0H8gNZ4k3XxIb6sYRldNxbY272wW6aj9yj+T1mGc0IcQNUhqLKeU6DGPgvw7qGhfn7balnINX7flm+uc2q+1k6UxX3JYhbuf5QvKRrO2jaVNwrAc9s8KgXk4RPh56WZP99JIIQdJR1BUQPSv7jrpc4SR56i2AyaJkph2g61J0m+PpG3zqkrv\/I5d1mdAk5o0zBkNFeSETSXsEyt9v+sbuoJmfMo2fZf7FKQkHSihIBdkE0m4V8rNtJTeUco9UOhsSsmg6vLL9Bj3+w+usgJ3tfcROnYStFkILNDpiiNtNxB9Q3KjYcwFqtP24N8saNvVgahsd0FkyPWpJLv\/9fcm32cvQjfg3levA0i88SorHQH6yBa5EgBLJsvwbeKfPj\/QPqZQSzwx9pcenbdaBWfhH3Wwu6DxPrcxlyMq5ka5b02q03I16y9iz2g0d8Tw8qmRxh\/rnVzM4cuDCbMkSHN+P5OvN1PgrhMqMA3\/7EAIJ0bogz4dD8iawJ5IlHBIDVEc8vE4ERc9ya0XZYfFaxj+67PBBxG\/3LihlYxstzy3D8B0aKzgwoJvKtdMB7xvsXEEkeGf8sZBtBBQaJRobtjp8VPbaUFj1TNCD2\/3iJ1luZ92A5bFvkfHyA0QNkW5BUKB2hq9iZVA==\",\"key_version\":\"13b17d83-e1f1-4d23-90b8-4642e54206d1\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"metadata\":{\"is_ad\":\"true\"},\"entity_type\":\"restaurant\",\"location_id\":\"4306215736965070848\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"search_id\":\"a6909374-354e-4706-ab56-2fda2805fd33\",\"request_id\":\"29c82e1d-164e-4cdd-b9d6-6f4b867c7cf3\",\"entity_id\":\"21999531\",\"element_type\":\"listing\",\"location_type\":\"delivery_cell\",\"rank\":11}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 21526206,
                    "name": "Cibbo - All Day Social",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/21526206\/db0a7ab2719716a0dbaf4d4a1099ba42_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/21526206\/db0a7ab2719716a0dbaf4d4a1099ba42_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/6\/21526206\/f3e6ef1b867367ffab54fbf4197b0c14_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.3",
                        "rating_text": "4.3",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "1,305",
                        "subtext": "REVIEW",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.3",
                                "reviewCount": "1,170",
                                "reviewTextSmall": "1,170 Reviews",
                                "subtext": "1,170 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.3",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.3",
                                "reviewCount": "135",
                                "reviewTextSmall": "135 Reviews",
                                "subtext": "135 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.3",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b92,200 for two"
                    },
                    "cfo": {
                        "text": "\u20b9900 for one"
                    },
                    "locality": {
                        "name": "Shivaji Nagar, Pune",
                        "address": "6A, 1195\/C, Sud Nagar, Near Tukaram Paduka Mandir, Fergusson College Road, Shivaji Nagar, Pune",
                        "localityUrl": "pune\/shivaji-nagar-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/pizza\/",
                            "name": "Pizza"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
                            "name": "Desserts"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/italian\/",
                            "name": "Italian"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b92,200 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 10,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "10% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/pune\/cibbo-all-day-social-shivaji-nagar\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "1.7 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"campaign_id\":\"18719608\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"5\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"21526206\",\"isNewAd\":\"34\",\"ad_position\":\"12\",\"slider_position\":\"12\",\"slider_sequence\":\"12\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"encrypted_data\":\"tQANtCLknymAGlwjtjfeioZfYVvrAdsxOVefl765tvTGOWlpbsrdN6rfUgtASOIQkhNPF7pQ3Bt6If+R9FkjIOw\/tSKQXFEr+YnM0Z2Fdai8Puw5aytyYFBMtiHUtGLZH3fMkq2zXhMtyKQs+a+OS+zYpiQX7rxei0Bos0aFV39Q59Mwd22KMchj7cBLlQmZdwPX0fS5fE9gmUJA7KB8NUUEsJvceQQ6Qo3o1EzMzJ3Oa+WdxY6dgqKu929STRP5\/mi14GGXcFB0RIZy\/UclXqDRFH1o2fTza97W8SxYCwYbzpLu1R6UAGmfG7vwbK2W7vF5hzREAqZtY937+NWLIwwlAkVVeJoS1HSbCKnHqJ6HjQMD6O6kHs+7s1XIdfA9XjLJHXbdGs8T8ZFBVA5b197d+jLFvsWLvoiVrUTEk8rpioY+HcL2X4UBXH04C\/S0ufwLky4hnb+KwYF8oBbv2dqjFEg\/8aeduk0xcuPLpcc93yPpbKYrzE8yD0FeivR5QwSEU\/IiTdPoy6IT1Sr3UbU50RTXh9Qz3XzRrosuoHGue8GQHVC0CHYVBN\/zm6A5frJv17Usi95h3uHLZ53W7NRV4XZvlM0bIhveZWQvFuzOXqp+g4DbM404IrJAmBGxZkdVf0njD1ZePS3zaw9Y00x67Ykkt3J2pUZ5JMwiFa4vnzsllaXvYVWMg9OtcHrmWLqMQOdYcdVR0qoNiaK3JalkLMvBCvIqz4xn00I3oZ17N1iYmDc2a7pECvUhr5S7rwAg\/pLjPn0wfeRNzDI\/rk4\/aOBxadj5guvAvrKti5RgcAyD7rDatmAAYq1yV+avGNOO7yxH6uqzkD32gio=\",\"key_version\":\"13b17d83-e1f1-4d23-90b8-4642e54206d1\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"metadata\":{\"is_ad\":\"true\"},\"entity_type\":\"restaurant\",\"location_id\":\"4306215736965070848\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"search_id\":\"a6909374-354e-4706-ab56-2fda2805fd33\",\"request_id\":\"29c82e1d-164e-4cdd-b9d6-6f4b867c7cf3\",\"entity_id\":\"21526206\",\"element_type\":\"listing\",\"location_type\":\"delivery_cell\",\"rank\":12}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 6508002,
                    "name": "Sante Spa Cuisine",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/2\/6508002\/4e93044f9653cbfe4d26743515632b1b_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/2\/6508002\/4e93044f9653cbfe4d26743515632b1b_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/2\/6508002\/9ab2d92dedd77425f54638f586177c5a_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.4",
                        "rating_text": "4.4",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "8,068",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.6",
                                "reviewCount": "4,557",
                                "reviewTextSmall": "4,557 Reviews",
                                "subtext": "4,557 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.6",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "800"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.2",
                                "reviewCount": "3,511",
                                "reviewTextSmall": "3,511 Reviews",
                                "subtext": "3,511 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.2",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b92,000 for two"
                    },
                    "cfo": {
                        "text": "\u20b9800 for one"
                    },
                    "locality": {
                        "name": "Koregaon Park, Pune",
                        "address": "Lane 1, Near Sunderban Resorts, Koregaon Park, Pune",
                        "localityUrl": "pune\/koregaon-park-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTQzXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/health-food\/",
                            "name": "Healthy Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzhcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/european\/",
                            "name": "European"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/italian\/",
                            "name": "Italian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/thai\/",
                            "name": "Thai"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjZcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/lebanese\/",
                            "name": "Lebanese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/beverages\/",
                            "name": "Beverages"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b92,000 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/pune\/sante-spa-cuisine-1-koregaon-park\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "3.8 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"campaign_id\":\"18730489\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"5\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"6508002\",\"isNewAd\":\"34\",\"ad_position\":\"13\",\"slider_position\":\"13\",\"slider_sequence\":\"13\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"encrypted_data\":\"8mhcMBLrERmEGnXG1c4cg5kSBfd4QVHBykKKyjcT0GEtg6M+w6mueJBK5vfl6siP39KuKAM0x96SbdLK3lSnx8Yhetp4mXBk1SfBsXOOnnOxZsx7bLavN8sGVdew083M\/8uWQFKB9T\/CDfF9l3krHJzcBA97PI78hYJ4XTOl0sIRZ+dP1BhcuDNGNBFRb+F6Z38N324D+PHE8KlsGbGOl\/Z8o\/pYjwDCTwXV51eRUBW3PzhzhrDL2UTQFrwNOZ38ooHvHHJzsUgQZml89rzam1AjHhPaM3QrDyKTbLWxryMrWNLmVMivt05U4TDyIF3+dxCqEg+5APAyWVxhfBp6L96Ib0i4vfe74bFpthxUAwgvDsOvAgV8Eezu9L+Fsso49ZSwscI3E7jgW8393ALzmyp151\/fU9xZMWDux\/Ou8xuNy9unzE0SrGVHrkCK93CYp6QVlnkQKMACuU2McuggpRBadIeEl8DtTywWYxQfIgNylL6xZQ6NPoupXb1ly5\/4jyNgdHATrXbv8EfD9LXoMR9s6+2YjNbYuswjWRSHrBn5ad95SijtopQv\/7IntClm7EDLLlBO187tPyzbxTEYYFxcvEGIfZ7PaLnVoZh5Bl1N2EILyrpmml7iaEM1WKPlF1avChzAfb1v1\/YC3M7jNx2R3NDvv2mX1\/Sh7FSLWXdezR+WZ5180PfpWQJ4vLeX1qvEl\/SEqhnn9pTTVU70A4p6F5anFXL1BJ+wySZdAyQq53x8jhCp6NwkjPrlhgq2fr8SQfwGCI9c1FNE9b8zr\/7x98WzySEkD7sh8rV6peIbgBPH2sZQQiTVStGrnQ==\",\"key_version\":\"13b17d83-e1f1-4d23-90b8-4642e54206d1\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"metadata\":{\"is_ad\":\"true\"},\"entity_type\":\"restaurant\",\"location_id\":\"4306215736965070848\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"search_id\":\"a6909374-354e-4706-ab56-2fda2805fd33\",\"request_id\":\"29c82e1d-164e-4cdd-b9d6-6f4b867c7cf3\",\"entity_id\":\"6508002\",\"element_type\":\"listing\",\"location_type\":\"delivery_cell\",\"rank\":13}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 18893197,
                    "name": "FC Road Social",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/4\/18657534\/d7f1e56afdaddb183b2f4167d67dfc71_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/4\/18657534\/d7f1e56afdaddb183b2f4167d67dfc71_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/chains\/4\/18657534\/c542f09c9cdf291317bf4dc6fe240045_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.1",
                        "rating_text": "4.1",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "8,501",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.1",
                                "reviewCount": "5,719",
                                "reviewTextSmall": "5,719 Reviews",
                                "subtext": "5,719 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.1",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.0",
                                "reviewCount": "2,782",
                                "reviewTextSmall": "2,782 Reviews",
                                "subtext": "2,782 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.0",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,500 for two"
                    },
                    "cfo": {
                        "text": "\u20b9600 for one"
                    },
                    "locality": {
                        "name": "Shivaji Nagar, Pune",
                        "address": "Unit 101, CTS 1183, 1st Floor, Mezzanine Floor, Cello Platina, Shivaji Nagar, Pune",
                        "localityUrl": "pune\/shivaji-nagar-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/north-indian\/",
                            "name": "North Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/chinese\/",
                            "name": "Chinese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNzNcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/mexican\/",
                            "name": "Mexican"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjc0XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/fusion\/",
                            "name": "Fusion"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/bar-food\/",
                            "name": "Bar Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjdcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/korean\/",
                            "name": "Korean"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
                            "name": "Desserts"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,500 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/pune\/fc-road-social-shivaji-nagar\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "1.7 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"campaign_id\":\"18729375\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"5\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"18893197\",\"isNewAd\":\"34\",\"ad_position\":\"14\",\"slider_position\":\"14\",\"slider_sequence\":\"14\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"encrypted_data\":\"JPi93GPs3AB2\/dSQteGdlM\/VM8FqeHIgp3Gdt2wo95M194iEM1x7k9mm90bdSCpxWK16KUYMJicvjWlhO1Z700ExBwyigFwM\/bUkmAO\/+XS4WeNBD6TCRcqmFqTJJrKzPOr1v0UgvrmPfdD7Cil2JXNPJwhL03KnjjrRcdvqAx31ZemVKJ5+rrkvl\/B+xm\/4te2CVkNCSAOVL2KWZLDx5Ywjsh5A8y8phXiw\/yGviNfxNZ4TqpA0ktY3Vptel7oCfIQuIyZnJiL7CI6IILEEFRhgcQPF\/9\/KUQIak4FGg7j3AgJ\/nC9iuprKswusoD0wqfzf616EtLgwNQllT8moIuziyWx4hYMELolAeIhMp1yE\/WJFolLaOR+jqPQffv0\/fgzCr9IyhRiLu1kNkI2VM27y8k8bTUOFk4R8LUn11EwWyIo9bwzM6pUlO98H0F2\/lZZbCO8g3xHk5B7DAbwJWVNMx2j5Vn+Fik1huNMeGaO6wp0PxdTHlmYlGzcVTAiBh40\/8hyJkqPAd4kUuRvMi7Tm55bGiLJmg5a3NPvfmBsVgMIeW0gFo54\/HPoJXKVE1KVLyJUB4ZXoXdVvAFTLZNw2qbrQNeAXsKFVdy18T\/MbRorlko5S8Wy3KX7B638H7lkQj0yvKOOXQUTvVbkv\/3x0orX\/l6nvQhL6ik+casiOlSqIKS0zzpaKws2UYhKQ2ypY8BbrNhl5v1fxLqkcXxEGFyHW63IAQHzve+8MepPSgUGzNP4t3+Ue2a77jCjR0P6oqJu+wp+4\/o8Z3IzllpLuC0gBqM0EOM1Rs3wWye7SSIf1eaXVMn6XYtsrHzjWwxjh4eTAgVf1gJcGhw==\",\"key_version\":\"13b17d83-e1f1-4d23-90b8-4642e54206d1\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"metadata\":{\"is_ad\":\"true\"},\"entity_type\":\"restaurant\",\"location_id\":\"4306215736965070848\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"search_id\":\"a6909374-354e-4706-ab56-2fda2805fd33\",\"request_id\":\"29c82e1d-164e-4cdd-b9d6-6f4b867c7cf3\",\"entity_id\":\"18893197\",\"element_type\":\"listing\",\"location_type\":\"delivery_cell\",\"rank\":14}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 22036229,
                    "name": "Gulp - Beer Garden",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/22036229\/2e0adfcc0c2293635490ee64b9204bd7_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/22036229\/2e0adfcc0c2293635490ee64b9204bd7_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/22036229\/8a6bee2a14807a8796c66b7da744a913_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.3",
                        "rating_text": "4.3",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "1,339",
                        "subtext": "REVIEW",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.3",
                                "reviewCount": "1,339",
                                "reviewTextSmall": "1,339 Reviews",
                                "subtext": "1,339 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.3",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Delivery",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "100"
                                },
                                "textColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b92,100 for two"
                    },
                    "cfo": {
                        "text": "\u20b9850 for one"
                    },
                    "locality": {
                        "name": "FC Road, Pune",
                        "address": "Ground Floor, Ashish Plaza Backyard Fergusson College Road \/ Shivaji Nagar, Maharashtra, FC Road, Pune",
                        "localityUrl": "pune\/fc-road-restaurants"
                    },
                    "timing": {
                        "text": "Opens at 6pm",
                        "color": "#ab000d"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/fast-food\/",
                            "name": "Fast Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/pasta\/",
                            "name": "Pasta"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/pizza\/",
                            "name": "Pizza"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b92,100 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 10,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "10% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/pune\/gulp-beer-garden-fc-road\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "1.7 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"campaign_id\":\"18677174\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"5\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"22036229\",\"isNewAd\":\"34\",\"ad_position\":\"15\",\"slider_position\":\"15\",\"slider_sequence\":\"15\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"encrypted_data\":\"w+X4woqvxJyL8BvO4qdzVLnN4EpZRNsN1bBpxTse2wBFLOhieOV+7iPonFLJQiv7Y2ZjkdN47O0kq6wKUpAH93GfY0hkTyimk+bYaFt4TTk4oOv3jD8U0a\/umo1W6LbulkN4kgLqUu\/vmPQWo6SGA3T+sJIOUrA8OtZPREnR9NL0go\/xO9YRgPD1gmf+2PjzzDFIjdVBxT9TyWKn1fWdWcON\/zHsawYxbdSe35MKrGwGNe8r0cw2dFA7O8PLEvhaxiQ4jy5ASCAiSu5U0CWy9fG9vJT+PtSsbmgHjAqNbTEys2syi9SgVpUtwZTzfeRqj1YZHOXIpsks3JgbjWlwIScdqf2iPeVqd2ac+ARpLmbdve3X43xVWGOXHX\/fGUnguDT+gJQnmQ0LBOGylfDqvO919OZUxa+LsXtT8oylYMdEJgHBMANF\/7eISKOYsS63MPVBVYR1iO5vHOLdcpDtNumnG7kuzG2Vver3wdKHPjdZTb9tIZVE9BktnNUs0bDnyLduJrujOh939hyHEeeMWKxVF\/EnKhmEw4aH0lAKNyF+fbF8QRwMEoONT5zwbYErmmqfjlaRsqQda\/HS93YPs5VTk\/lFd8NAM7Pv+\/sglT9AqvsDHNaP7TkXO+Bh3i2Ak5tdvx5FQMD+iFWiMEYshI3lUpi\/CGPSdtX8CDtmRzRY04fxmoaDizQhPVf2ko4HJy6MOl+OlvCY+p0K8PimpiPDFInCv+UT8sNegy1ORafXj9bftp\/F3BgJqDV7WQsJwytkefj7AiZPpH86vIngNa4QxlXgrzJLAN4NA+PgPud6lXggJKwnO3\/eYDOmObzpA\/vL4HrqgML\/2iP4hG3D\",\"key_version\":\"13b17d83-e1f1-4d23-90b8-4642e54206d1\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"metadata\":{\"is_ad\":\"true\"},\"entity_type\":\"restaurant\",\"location_id\":\"4306215736965070848\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"search_id\":\"a6909374-354e-4706-ab56-2fda2805fd33\",\"request_id\":\"29c82e1d-164e-4cdd-b9d6-6f4b867c7cf3\",\"entity_id\":\"22036229\",\"element_type\":\"listing\",\"location_type\":\"delivery_cell\",\"rank\":15}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 22444089,
                    "name": "Matcha Brew And Bake",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/22444089\/ba465f273bd99497cb97dd3b2f06b84a_o2_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/22444089\/ba465f273bd99497cb97dd3b2f06b84a_o2_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/22444089\/ba465f273bd99497cb97dd3b2f06b84a_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.5",
                        "rating_text": "4.5",
                        "rating_subtitle": "Excellent",
                        "rating_color": "3F7E00",
                        "votes": "278",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.5",
                                "reviewCount": "276",
                                "reviewTextSmall": "276 Reviews",
                                "subtext": "276 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.5",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "800"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "",
                                "reviewCount": "2",
                                "reviewTextSmall": "2 Reviews",
                                "subtext": "Does not offer Delivery",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "100"
                                },
                                "textColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,800 for two"
                    },
                    "cfo": {
                        "text": "\u20b9750 for one"
                    },
                    "locality": {
                        "name": "Koregaon Park, Pune",
                        "address": "Survey 21, A\/10-B Plot, South Main Road, Ashok Chakra Society, Meera Nagar, Koregaon Park, Pune",
                        "localityUrl": "pune\/koregaon-park-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/cafes\/",
                            "name": "Cafe"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
                            "name": "Desserts"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc3XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/sushi\/",
                            "name": "Sushi"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/japanese\/",
                            "name": "Japanese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/coffee\/",
                            "name": "Coffee"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,800 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 10,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "10% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/pune\/matcha-brew-and-bake-koregaon-park\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "4.6 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"campaign_id\":\"18735371\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"5\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"22444089\",\"isNewAd\":\"34\",\"ad_position\":\"16\",\"slider_position\":\"16\",\"slider_sequence\":\"16\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"encrypted_data\":\"1iDnXNk7hHVXoPm747\/24qX0LgoEmD0BZVpuv6C4vG2zBQClNddT8yStfu4j22RiYpuEbGknaGxFnYgqkxh45deCGjZjuaRipUzTP82UpamTvD8jP4NPumRrxesXKwyhMRhn9FcMUUv\/WrGy9YUAXLNA+emZGL0\/c2V4ivjc6JkMiXriKkLXuw7400YtDHe3ZBHshhd0TZwgcANKnbIloAf9auYyUpYRiDyo2aGajm3bPx0HU6Zdah273DWjB5VRcikZbVcheT7l35DqnLQts1AUMJrpp+P+wLtBVji0FXfkvs0F5TzQnkbkH98hysY7NHzdjFIe8myy8UJOw0uZuUW8lmN9eVYZrufiDCEopqxfVmI7PKCFZu99Dz+xz37Mosl7l0nE7vJG5o62XIjLfXPKROkoJOn9hJHB00j4\/zgDGhIEKkJV16PFSlRsmXUDRWVT2LQsohZxlV12LdnKHSItIqoWQKti+7cUsXfx4SYhZK59StPAfVGhfwjU+0toQ3HOaJA6nLHrWS6tkQeIXGKUPPuwb8HFK0mvvJ5nUp2jiZg\/C81NC4ja57S+MQe10SILVRrlTdxEh2iQdcdYclaRFYE4lo6mmbtRRfBtwU\/1TCKlpbqO59dGOcWWHnliFF64CDqFg3hPXgb42oWbEZ+lfYv7QAxm9XtHw\/RLzNuXfJ65WohoLd3FokViM81liuoRQCGYSWBIs6pfbfcYBeJmkCdWDoTyG0Alt+88YDRJFDaqbEdKwuoSLMgtQFWr9eoOwEnN8kGIFhv6xQWITisQRNFXiiadiOVe02lWQLGE63tDDJYAGLhsi+5TzwihWS\/c7L5h1tVJSYA=\",\"key_version\":\"13b17d83-e1f1-4d23-90b8-4642e54206d1\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"metadata\":{\"is_ad\":\"true\"},\"entity_type\":\"restaurant\",\"location_id\":\"4306215736965070848\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"search_id\":\"a6909374-354e-4706-ab56-2fda2805fd33\",\"request_id\":\"29c82e1d-164e-4cdd-b9d6-6f4b867c7cf3\",\"entity_id\":\"22444089\",\"element_type\":\"listing\",\"location_type\":\"delivery_cell\",\"rank\":16}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 21083741,
                    "name": "Fiori",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/21083741\/82f315a23857fca7850210e824cbf6c1_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/21083741\/82f315a23857fca7850210e824cbf6c1_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/21083741\/75e0fa25f6d0538c2925051586290469_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.3",
                        "rating_text": "4.3",
                        "rating_subtitle": "Very Good",
                        "rating_color": "5BA829",
                        "votes": "2,375",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.3",
                                "reviewCount": "2,261",
                                "reviewTextSmall": "2,261 Reviews",
                                "subtext": "2,261 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.3",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "4.2",
                                "reviewCount": "114",
                                "reviewTextSmall": "114 Reviews",
                                "subtext": "114 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "4.2",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,300 for two"
                    },
                    "cfo": {
                        "text": "\u20b9550 for one"
                    },
                    "locality": {
                        "name": "Lonavala, Pune",
                        "address": "CTS 46, Lonavala, Pune",
                        "localityUrl": "pune\/lonavala-restaurants"
                    },
                    "timing": {
                        "text": "Opens in 16 minutes",
                        "color": "#e5521f"
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/pizza\/",
                            "name": "Pizza"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NFwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/pasta\/",
                            "name": "Pasta"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/sandwich\/",
                            "name": "Sandwich"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/burger\/",
                            "name": "Burger"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/coffee\/",
                            "name": "Coffee"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/beverages\/",
                            "name": "Beverages"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
                            "name": "Desserts"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,300 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/pune\/fiori-1-lonavala\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "53.9 km",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"entity_type\":\"restaurant\",\"location_id\":\"4306215736965070848\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"search_id\":\"a6909374-354e-4706-ab56-2fda2805fd33\",\"request_id\":\"29c82e1d-164e-4cdd-b9d6-6f4b867c7cf3\",\"entity_id\":\"21083741\",\"element_type\":\"listing\",\"location_type\":\"delivery_cell\",\"rank\":17}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 22063709,
                    "name": "Beanery Cafe",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/22063709\/0e50b389bd33800f5b16b014b558ab4f_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/22063709\/0e50b389bd33800f5b16b014b558ab4f_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/9\/22063709\/8ac0da2eab249de06424c9eceb39edf6_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "3.5",
                        "rating_text": "3.5",
                        "rating_subtitle": "Good",
                        "rating_color": "9ACD32",
                        "votes": "74",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "3.8",
                                "reviewCount": "64",
                                "reviewTextSmall": "64 Reviews",
                                "subtext": "64 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "3.8",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "600"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "3.1",
                                "reviewCount": "10",
                                "reviewTextSmall": "10 Reviews",
                                "subtext": "10 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "3.1",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "yellow",
                                    "tint": "400"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,200 for two"
                    },
                    "cfo": {
                        "text": "\u20b9500 for one"
                    },
                    "locality": {
                        "name": "Senapati Bapat Road, Pune",
                        "address": "102\/B\/18, Aside, Chattushringi, Gokhalenagar, Senapati Bapat Road, Pune",
                        "localityUrl": "pune\/senapati-bapat-road-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/shake\/",
                            "name": "Shake"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/fast-food\/",
                            "name": "Fast Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/sandwich\/",
                            "name": "Sandwich"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/beverages\/",
                            "name": "Beverages"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/coffee\/",
                            "name": "Coffee"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/salad\/",
                            "name": "Salad"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
                            "name": "Desserts"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,200 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/pune\/beanery-cafe-senapati-bapat-road\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "3.5 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"campaign_id\":\"18736330\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"5\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"22063709\",\"isNewAd\":\"34\",\"ad_position\":\"18\",\"slider_position\":\"18\",\"slider_sequence\":\"18\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"encrypted_data\":\"u8bY1sJg2XXGTIaHC2CXsjceTnNqOMDTyt8t\/ggZMdd4FNZvkrYtMFN2tZD9LvQ9M0ONSGivBZnNgyBMQUelbBw8yvQycAm0WDisVVr60XUthk4yGGvMy1WgrNACpts2h+r2LU+pNsuu4WsaEwGzIoI6\/dZAnkCVDXnWgdoWc2PYl6ui9mzNhISwb89HSMIqOCArBjppHXBHeZgc1PxVOqkuLnWTDu97O7C82BkRyDPxUMck5zzSqMZrobSCpE\/doZocII+Lis6xRA\/gCC9m01niR6hp7gQpDc1Dmpz7xHvXj\/DjIqycrmZrBjhxrevIld0vtLmjEM+hOoICy5jFqm9zt7RECt3ZD2ZG+kcRLVkGVhBves2vXbKT\/zsxtGw1\/KJdi3AjpDazW8qs9ivXr3S\/H7Ro3encBPi6VXeyLOn+VqnHnOsMj5yAxvCSyVMRrebVbiu5nBUCWBCb0q9GBUyesRwaBjwWLIl4p+c161XsCvMo0tynGt5cXxfuLkgwJp2uvZbRTP69WI4rd35LTACPqW7+Kc7L6aSAnd2kH8MwKaUMhydzUcDhn7Wpxq0\/1Ldoq3qAgbSAubGjeUSi6\/aq5J54AsnZEaI9HTUxW+Fp+PzKQwoWvO+ThGdPRRPTO4C+J8ibc5n5GtTwT\/fLMQKpbe4aR6IQVXijmLzl+maZ\/qtL6qcYUtPJ00ynkWHfOafoDybIBbXZmyo9ia9c7pUNhPdmhEbKy194L2777R5HCThFDVw9uFkz+v6tWhhsDBpyQKZTJ1B+ZMgVWmt0W99CVEJg2P3kDnrnffnAj5sIUiFQqPiX+s204JsRKlA2tBhasINF3MKdkw==\",\"key_version\":\"13b17d83-e1f1-4d23-90b8-4642e54206d1\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"metadata\":{\"is_ad\":\"true\"},\"entity_type\":\"restaurant\",\"location_id\":\"4306215736965070848\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"search_id\":\"a6909374-354e-4706-ab56-2fda2805fd33\",\"request_id\":\"29c82e1d-164e-4cdd-b9d6-6f4b867c7cf3\",\"entity_id\":\"22063709\",\"element_type\":\"listing\",\"location_type\":\"delivery_cell\",\"rank\":18}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 21260661,
                    "name": "Aloraa Garden Kitchen & Bar",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/21260661\/ea1bd1f00cdc3868c98e388a7bdb1b8b_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/21260661\/ea1bd1f00cdc3868c98e388a7bdb1b8b_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/1\/21260661\/445f222a7cce8fd7443286d48e56ddd5_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.5",
                        "rating_text": "4.5",
                        "rating_subtitle": "Excellent",
                        "rating_color": "3F7E00",
                        "votes": "5,071",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.5",
                                "reviewCount": "5,071",
                                "reviewTextSmall": "5,071 Reviews",
                                "subtext": "5,071 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.5",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "800"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Delivery",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "100"
                                },
                                "textColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,800 for two"
                    },
                    "cfo": {
                        "text": "\u20b9750 for one"
                    },
                    "locality": {
                        "name": "Baner, Pune",
                        "address": "Behind Mercedes Showroom, Baner, Pune",
                        "localityUrl": "pune\/baner-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/maharashtrian\/",
                            "name": "Maharashtrian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/chinese\/",
                            "name": "Chinese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/kebab\/",
                            "name": "Kebab"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/biryani\/",
                            "name": "Biryani"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/fast-food\/",
                            "name": "Fast Food"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
                            "name": "Desserts"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjI3XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/bar-food\/",
                            "name": "Bar Food"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,800 for two"
                    }
                },
                "order": [],
                "gold": [],
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/pune\/aloraa-garden-kitchen-bar-baner\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "10.8 km",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"entity_type\":\"restaurant\",\"location_id\":\"4306215736965070848\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"search_id\":\"a6909374-354e-4706-ab56-2fda2805fd33\",\"request_id\":\"29c82e1d-164e-4cdd-b9d6-6f4b867c7cf3\",\"entity_id\":\"21260661\",\"element_type\":\"listing\",\"location_type\":\"delivery_cell\",\"rank\":19}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 22218234,
                    "name": "Cafe Sora",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/22218234\/d986196a586724431737ae057e0fa1fa_o2_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/22218234\/d986196a586724431737ae057e0fa1fa_o2_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/4\/22218234\/d986196a586724431737ae057e0fa1fa_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "3.8",
                        "rating_text": "3.8",
                        "rating_subtitle": "Good",
                        "rating_color": "9ACD32",
                        "votes": "342",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.2",
                                "reviewCount": "331",
                                "reviewTextSmall": "331 Reviews",
                                "subtext": "331 Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.2",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "700"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "3.3",
                                "reviewCount": "11",
                                "reviewTextSmall": "11 Reviews",
                                "subtext": "11 Delivery Reviews",
                                "color": "#E23744",
                                "ratingV2": "3.3",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "yellow",
                                    "tint": "400"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b91,500 for two"
                    },
                    "cfo": {
                        "text": "\u20b9600 for one"
                    },
                    "locality": {
                        "name": "FC Road, Pune",
                        "address": "917\/19a, Plot 299\/19a, Ground Floor, Ferguson College Road, Shivajinagar, Ghole Road, FC Road, Pune",
                        "localityUrl": "pune\/fc-road-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzBcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/cafes\/",
                            "name": "Cafe"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODJcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/pizza\/",
                            "name": "Pizza"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/coffee\/",
                            "name": "Coffee"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b91,500 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 10,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "10% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/pune\/cafe-sora-fc-road\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "1.7 km",
                "isPromoted": true,
                "promotedText": "Promoted",
                "trackingData": [
                    {
                        "table_name": "jadtracking",
                        "payload": "{\"campaign_id\":\"18663356\",\"category_id\":\"1\",\"location_type\":\"city\",\"location_id\":\"5\",\"display_page\":\"dineout_home\",\"entity_type\":\"RESTAURANT\",\"entity_id\":\"22218234\",\"isNewAd\":\"34\",\"ad_position\":\"20\",\"slider_position\":\"20\",\"slider_sequence\":\"20\",\"creative_id\":\"0\",\"collection_id\":\"0\",\"encrypted_data\":\"zNeYVp6D\/tg5USEXZJ3OJAIty1dJb4dbINArom5PNGWwdAY2PAbx2+g\/\/nPDvGPOXH2JuaE6\/aJKg555P71LBqgvkVNDljQsQ2VXelBUpsaDASXuhx2rd3247hg1PWmrv813XCNDK8IlNjOECRZOYvoH19GUSWSFb0FQC3ZhYQsbnaH6XiSvFwtUR1VSAdaIYm7wpRDZjkhsprjXPoeahJKfEnDM5s7lp9gggQj8QAJuF\/ViwAmeWYeCKwrVTmbRsTM1sfgU4EcSwBodqO8wHOEVtsZUoSTJXmpgT\/77a7Si3S7xP6ZnDDUz2tUe59qaCyAHwWJUxNvlL3xKID3INzmTuCuwN3U9BOvUpWRfGvoFfVH8RWwP\/aY2qv48ZzM3OyHDs+NbN1OxH8ScUJag21G38sH6b0sd5PiVGgMn0mEa4A0UPgJQ85ADv7gJwkRDzrvEy33C87b9vg6S+DBRcz80HcKfbYc6LeT51A0sMFlsIUH8H5fzSfW\/SsOYaCBm6btncaUeYq7H1DceA58NAKYTC85MzqWAp19WqKHL\/5aXBkdiLHh+Ojm1hHRBwf4\/ohCYZfsZa0GuNSjFwQfyUVujL1oZd6m8ohZeBLpoiVxOXvnD8pdMPMcTJWKJZGmzCksdw\/pvX52iqWurhb9+qcdzqgFVba\/VsdOdA\/t1Yhsvq+TquEfsPCXwt1iwaaFJPCxtABBBaeOs8eDloMzw0JrgXYNXUIEuBAYZvNA60QDblfx10H8nB3yLX6XHdCmSUvQ94efqJ9Ihh+CsdqYrigoMPWCOJZj5QXZvI+6VjF2Ka4f99Ek+5DpuIEM9GsjM7W2\/M+l9NC03\",\"key_version\":\"13b17d83-e1f1-4d23-90b8-4642e54206d1\",\"flink_display_page\":\"dineout_home\"}",
                        "event_names": {
                            "tap": "{\"action\":\"click\"}",
                            "impression": "{\"action\":\"impression\"}",
                            "served": "{\"action\":\"serve\"}"
                        }
                    },
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"metadata\":{\"is_ad\":\"true\"},\"entity_type\":\"restaurant\",\"location_id\":\"4306215736965070848\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"search_id\":\"a6909374-354e-4706-ab56-2fda2805fd33\",\"request_id\":\"29c82e1d-164e-4cdd-b9d6-6f4b867c7cf3\",\"entity_id\":\"22218234\",\"element_type\":\"listing\",\"location_type\":\"delivery_cell\",\"rank\":20}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            },
            {
                "type": "restaurant",
                "info": {
                    "resId": 20675883,
                    "name": "Cherie",
                    "image": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/3\/20675883\/1b90d6b7a71fdcbfb5a137b92dfddedc_featured_v2.jpg",
                        "urlWithParams": "https:\/\/b.zmtcdn.com\/data\/pictures\/3\/20675883\/1b90d6b7a71fdcbfb5a137b92dfddedc_featured_v2.jpg?fit=around%7C108%3A108&crop=108%3A108%3B%2A%2C%2A"
                    },
                    "o2FeaturedImage": {
                        "url": "https:\/\/b.zmtcdn.com\/data\/pictures\/3\/20675883\/14939f24d4840c9e9f0873b07bb6dac4_o2_featured_v2.jpg"
                    },
                    "rating": {
                        "has_fake_reviews": 0,
                        "aggregate_rating": "4.7",
                        "rating_text": "4.7",
                        "rating_subtitle": "Excellent",
                        "rating_color": "3F7E00",
                        "votes": "11.7K",
                        "subtext": "REVIEWS",
                        "is_new": false
                    },
                    "ratingNew": {
                        "newlyOpenedObj": null,
                        "suspiciousReviewObj": null,
                        "ratings": {
                            "DINING": {
                                "rating_type": "DINING",
                                "rating": "4.7",
                                "reviewCount": "11.7K",
                                "reviewTextSmall": "11.7K Reviews",
                                "subtext": "11.7K Dining Reviews",
                                "color": "#1C1C1C",
                                "ratingV2": "4.7",
                                "subtitle": "DINING",
                                "sideSubTitle": "Dining Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "800"
                                },
                                "newOnDining": false
                            },
                            "DELIVERY": {
                                "rating_type": "DELIVERY",
                                "rating": "",
                                "reviewCount": "0",
                                "reviewTextSmall": "0 Reviews",
                                "subtext": "Does not offer Delivery",
                                "color": "",
                                "ratingV2": "-",
                                "subtitle": "DELIVERY",
                                "sideSubTitle": "Delivery Ratings",
                                "bgColorV2": {
                                    "type": "green",
                                    "tint": "100"
                                },
                                "textColorV2": {
                                    "type": "green",
                                    "tint": "500"
                                },
                                "newOnDelivery": false
                            }
                        }
                    },
                    "cft": {
                        "text": "\u20b93,000 for two"
                    },
                    "cfo": {
                        "text": "\u20b91,200 for one"
                    },
                    "locality": {
                        "name": "Hinjawadi, Pune",
                        "address": "White Square, Maheshwari Link Road, Hinjawadi, Pune",
                        "localityUrl": "pune\/hinjawadi-restaurants"
                    },
                    "timing": {
                        "text": "",
                        "color": ""
                    },
                    "cuisine": [
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/asian\/",
                            "name": "Asian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxOFwiXX0iXQ%3D%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/modern-indian\/",
                            "name": "Modern Indian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/chinese\/",
                            "name": "Chinese"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/italian\/",
                            "name": "Italian"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTk4XCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/salad\/",
                            "name": "Salad"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/continental\/",
                            "name": "Continental"
                        },
                        {
                            "deeplink": "zomato:\/\/search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
                            "url": "https:\/\/www.zomato.com\/pune\/restaurants\/desserts\/",
                            "name": "Desserts"
                        }
                    ],
                    "should_ban_ugc": false,
                    "costText": {
                        "text": "\u20b93,000 for two"
                    }
                },
                "order": [],
                "gold": {
                    "instant": 25,
                    "welcome_offer": false,
                    "gold_offer": false,
                    "text": "Flat",
                    "offerValue": "25% OFF",
                    "isGoldIcon": false
                },
                "takeaway": [],
                "cardAction": {
                    "text": "",
                    "clickUrl": "\/pune\/cherie-hinjawadi\/info",
                    "clickActionDeeplink": ""
                },
                "distance": "13.4 km",
                "isPromoted": false,
                "promotedText": "",
                "trackingData": [
                    {
                        "table_name": "zsearch_events_log",
                        "payload": "{\"entity_type\":\"restaurant\",\"location_id\":\"4306215736965070848\",\"page_type\":\"dineout\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"search_id\":\"a6909374-354e-4706-ab56-2fda2805fd33\",\"request_id\":\"29c82e1d-164e-4cdd-b9d6-6f4b867c7cf3\",\"entity_id\":\"20675883\",\"element_type\":\"listing\",\"location_type\":\"delivery_cell\",\"rank\":21}",
                        "event_names": {
                            "tap": "{\"action\":\"tap\"}",
                            "impression": "{\"action\":\"impression\"}"
                        }
                    }
                ],
                "allCTA": [],
                "promoOffer": "",
                "checkBulkOffers": false,
                "bulkOffers": [],
                "isDisabled": false,
                "bottomContainers": []
            }
        ]

const Appbody = () => {
    return (
        <div className="app-body">
            <div className="search-container"> <input className="search" type="text" placeholder="Search" /></div>

              <div className="res-container">
                {
                  resList.map((restaurant) => (<ResCard key={restaurant.info.resId} resData = {restaurant}/>))
                }
              </div>
        </div>
    )
}

// const Appfooter = () => {
//     return ()
// }

const AppLayout = () => {
    return (
        <div className="app">
            <Appheader/>
            <Appbody/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(jsxHeading)
root.render(<AppLayout/>)
