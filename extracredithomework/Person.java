public class person {
	String name;
	String lastname;

	public Person(String name, String lastname){
		this.name = name;
		this.lastname = lastname;
	}
	public String people(){
		return "name: " + name + " , " + "lastname: " + lastname;
	}
}