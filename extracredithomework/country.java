public class country{
	String country;
	String city;
	public country(String country, String city){
		this.country = country;
		this.city = city;
	}
	public String region(){
		return "country: " + country + " , " + "city: " + city;
	}
}