package main

import (
	"net/http"
	"github.com/gin-gonic/gin"
)

type course struct {
	ID			string		`json: "id"`
	Course		string		`json: "course"`
	Pengajar	string		`json: "pengajar"`
	Deskripsi	string		`json: "deskripsi"`
	Harga		int			`json: "harga"`
	Gambar		string		`json: "gambar"`
}

var courses = []course {
	{ID: "1", Course: "Belajar PAB 1", Pengajar: "Pak Sinung", 
		Deskripsi: "Menggunakan React native",
		Harga: 100000,
		Gambar: "https://codenesia.id/storage/2022/03/react-native.png",
	},
	{ID: "2", Course: "Belajar PAB 2", Pengajar: "Pak Sinung 2",
		Deskripsi: "Menggunakan Flutter",
		Harga: 150000,
		Gambar: "https://global-uploads.webflow.com/6100d0111a4ed76bc1b9fd54/62ba7b7f547a660f37c11826_flutter%201.png",
	},
	{ID: "3", Course: "Web Development Fundamentals", Pengajar: "Pak Sinung 2",
		Deskripsi: "Dasar-dasar Pengembangan Web",
		Harga: 120000,
		Gambar: "https://s3.us-east-2.amazonaws.com/stg.uploads.slidenest/template_656/templateColor_689/previewImages/fundamentals-of-web-development-powerpoint-google-slides-keynote-presentation-template-1.jpeg",
	},
	{ID: "4", Course: "Data Science with Python", Pengajar: "Buk Nurul",
		Deskripsi: "Menerapkan Ilmu Data dengan Python",
		Harga: 180000,
		Gambar: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230318230239/Python-Data-Science-Tutorial.jpg",
	},
	{ID: "5", Course: "Mobile App Design", Pengajar: "Pak Fay",
		Deskripsi: "Mendesain Aplikasi Mobile yang Menarik",
		Harga: 130000,
		Gambar: "https://assets.tristatetechnology.com/images/mobile-application-design-og-img.jpg",
	},
	{ID: "6", Course: "Introduction to Cybersecurity", Pengajar: "Buk Tien",
		Deskripsi: "Dasar Keamanan Informasi dan Jaringan",
		Harga: 100000,
		Gambar: "https://media.licdn.com/dms/image/D4D12AQGEWtp-W6RVkA/article-cover_image-shrink_720_1280/0/1656944007892?e=2147483647&v=beta&t=isi5vEfnc3-wiZtGhddtAy0qlg3VOaPFBjRteRGvm0U",
	},
}
 
func getCourse(context *gin.Context) {
	context.IndentedJSON(http.StatusOK, courses)
}

//menambah data (munggunakan postman)
func addCourse(context *gin.Context) {
	var newCourse course;
	if err := context.BindJSON(&newCourse); err != nil {
		return;
	};
	courses = append(courses, newCourse)
	context.IndentedJSON(http.StatusCreated, newCourse);
}

func searchCourse(context *gin.Context) {
	keyword := context.Query("search")

	if keyword == "" {
		context.JSON(http.StatusBadRequest, gin.H{"error": "Search parameter is required"})
		return
	}

	var searchResults []course
	for _, c := range coursea {
		lowercaseCourse := strings.ToLower(c.Course)
		lowercaseKeyword := strings.ToLower(keyword)

		if strings.Contains(lowercaseCourse, lowercaseKeyword) {
			searchResults = append(searchResults, c)
		}
	}

	if len(searchResults) > 0 {
		context.JSON(http.StatusOK, searchResults)
	} else {
		context.JSON(http.StatusNotFound, gin.H{"error": "No matching courses found"})
	}
}
 
func main() {
	router := gin.Default()
	router.GET("/courses", getCourse)
	router.POST("/course", addCourse)
	router.GET("/courses/search", searchCourse)
	router.Run("localhost:9090")
}