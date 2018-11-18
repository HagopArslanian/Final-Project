public class personal{
	String placeofbirth;
	int age;

	public personal(String placeofbirth, int age){
		this.placeofbirth = placeofbirth;
		this.age = age;
	}

	public String age(){
		return "Place of birth: " + placeofbirth + " , " + "age: " + age;
	}
}