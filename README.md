# Bookary, an online book store

Hey, Yasin here. Bookary is an online book store template. I've tried to pay more attention to the logic part of the project so the UI might not be the best that I
coulde've done. I've used Context API and Local storage to log the user in and save his/her info By the way, I've used my 
[Sign up form](https://github.com/YasinYunesi/SignUp-form) project for users to sign up.


## Technologies

 - React JS (Javascript library)
 - React-hook-form (Form validation)
 - Tailwind CSS (Styling and positioning)
 - Google books API (Book API)
 
 ## API Reference

#### Base URL

```http
  "https://www.googleapis.com/books/v1/volumes?q=run"
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `q`       | `string` | **Required**. search query |

#### Filter (e.g ebooks)

```http
  GET ${baseURL}&filter=ebooks
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `q`       | `string` | **Required**. search query |
| `filter`  | `string` |  Filters what to show      |

#### Print type (e.g magazines)

```http
  GET ${baseURL}&printType=magazines
```

| Parameter | Type     | Description                          |
| :-------- | :------- | :----------------------------------- |
| `q`       | `string` | **Required**. search query |
| `printType`   | `string` | The print type to show |


## Appendix

- Feel free to check the images out on Wiki.
- You can visit the website by clicking on [This](https://bookary.vercel.app/) link.


## Authors

- [@Yasin-Yunesi](https://findyasinyunesi.vercel.app/)
