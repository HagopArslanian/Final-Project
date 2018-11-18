public class mainclass{
	public static int factorial(num){
		if(num == 1){
			return 1;
		}
		return num * factorial(num - 1);
	}
	public static void main(String[] args){
		person firstperson = new person("Hagop", "Arslanian");
		System.out.println(firstperson.people());

		personal personaldetails = new personal("Syria", 18);
		System.out.println(personaldetails.age());

		country livelihood = new country("Armenia", "Yerevan");
		System.out.println(livelihood.region());
	}
}