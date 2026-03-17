import Text "mo:core/Text";
import List "mo:core/List";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";

actor {
  type Division = {
    #trading;
    #wellness;
    #other : Text;
  };

  type ContactFormSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    subject : Division;
    message : Text;
    timestamp : Int;
  };

  let contactFormSubmissions = List.empty<ContactFormSubmission>();

  let admin = Principal.fromText("2vxsx-fae");

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, subject : Division, message : Text) : async () {
    let submission : ContactFormSubmission = {
      name;
      email;
      phone;
      subject;
      message;
      timestamp = 0;
    };
    contactFormSubmissions.add(submission);
  };

  public query ({ caller }) func getAllContactSubmissions() : async [ContactFormSubmission] {
    if (caller != admin) {
      Runtime.trap("Unauthorized access: Only admin can view contact submissions");
    };
    contactFormSubmissions.toArray();
  };
};
