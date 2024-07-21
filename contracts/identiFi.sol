// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract IdentiFi {
    struct User {
        string firstName;
        string lastName;
        string username;
        string email;
        string homeAddress;
        string dateOfBirth;
        string education;
        string workHistory;
        string phoneNumber;
        string jobTitle;
        string x;
        string instagram;
        string tiktok;
        string youtube;
        string linkedin;
        string info;
        string[] skills;
        string imageURL;
        bool exists;
        uint[] appliedJobs; 
        Visibility visibility;
    }

    struct Visibility {
        bool education;
        bool workHistory;
        bool phoneNumber;
        bool homeAddress;
        bool dateOfBirth;
    }

    struct BasicInfo {
        string firstName;
        string lastName;
        string email;
        string homeAddress;
        string dateOfBirth;
        string phoneNumber;
    }

    struct SocialLinks {
        string x;
        string instagram;
        string tiktok;
        string youtube;
        string linkedin;
    }

    struct ProfessionalInfo {
        string education;
        string workHistory;
        string jobTitle;
        string info;
        string[] skills;
        string imageURL;
    }

    mapping(string => User) private users;
    mapping(address => string) private addressToUsername;
    mapping(string => bool) private usernames; // To check uniqueness of username


    modifier onlyUniqueUsername(string memory username) {
        require(!usernames[username], "Username already exists.");
        _;
    }

    function createUser(
        string memory username,
        BasicInfo memory basicInfo,
        ProfessionalInfo memory professionalInfo,
        SocialLinks memory socialLinks,
        Visibility memory visibility
    ) public onlyUniqueUsername(username) {
        User storage user = users[username];
        user.firstName = basicInfo.firstName;
        user.lastName = basicInfo.lastName;
        user.username = username;
        user.email = basicInfo.email;
        user.homeAddress = basicInfo.homeAddress;
        user.dateOfBirth = basicInfo.dateOfBirth;
        user.phoneNumber = basicInfo.phoneNumber;
        user.education = professionalInfo.education;
        user.workHistory = professionalInfo.workHistory;
        user.jobTitle = professionalInfo.jobTitle;
        user.x = socialLinks.x;
        user.instagram = socialLinks.instagram;
        user.tiktok = socialLinks.tiktok;
        user.youtube = socialLinks.youtube;
        user.linkedin = socialLinks.linkedin;
        user.info = professionalInfo.info;
        user.skills = professionalInfo.skills;
        user.imageURL = professionalInfo.imageURL;
        user.exists = true;
        user.visibility = visibility;
        usernames[username] = true;
        addressToUsername[msg.sender] = username;
    }

    function editUser(
        string memory username,
        BasicInfo memory basicInfo,
        ProfessionalInfo memory professionalInfo,
        SocialLinks memory socialLinks,
        Visibility memory visibility
    ) public {
        require(users[username].exists, "User does not exist.");
        User storage user = users[username];
        user.firstName = basicInfo.firstName;
        user.lastName = basicInfo.lastName;
        user.email = basicInfo.email;
        user.homeAddress = basicInfo.homeAddress;
        user.dateOfBirth = basicInfo.dateOfBirth;
        user.phoneNumber = basicInfo.phoneNumber;
        user.education = professionalInfo.education;
        user.workHistory = professionalInfo.workHistory;
        user.jobTitle = professionalInfo.jobTitle;
        user.x = socialLinks.x;
        user.instagram = socialLinks.instagram;
        user.tiktok = socialLinks.tiktok;
        user.youtube = socialLinks.youtube;
        user.linkedin = socialLinks.linkedin;
        user.info = professionalInfo.info;
        user.skills = professionalInfo.skills;
        user.imageURL = professionalInfo.imageURL;
        user.visibility = visibility;
    }

    function getUserByUsername(string memory username) public view returns (
        BasicInfo memory basicInfo,
        ProfessionalInfo memory professionalInfo,
        SocialLinks memory socialLinks,
        Visibility memory visibility
    ) {
        require(users[username].exists, "User does not exist.");
        User storage user = users[username];
        basicInfo = BasicInfo(
            user.firstName,
            user.lastName,
            user.email,
            user.homeAddress,
            user.dateOfBirth,
            user.phoneNumber
        );
        professionalInfo = ProfessionalInfo(
            user.education,
            user.workHistory,
            user.jobTitle,
            user.info,
            user.skills,
            user.imageURL
        );
        socialLinks = SocialLinks(
            user.x,
            user.instagram,
            user.tiktok,
            user.youtube,
            user.linkedin
        );
        visibility = user.visibility;
        return (basicInfo, professionalInfo, socialLinks, visibility);
    }

    function getUserByAddress(address userAddress) public view returns (
        BasicInfo memory basicInfo,
        ProfessionalInfo memory professionalInfo,
        SocialLinks memory socialLinks,
        Visibility memory visibility
    ) {
        string memory username = addressToUsername[userAddress];
        return getUserByUsername(username);
    }

    function getUsernameByAddress(address userAddress) public view returns (string memory) {
        return addressToUsername[userAddress];
    }

    function setVisibility(
        string memory username, 
        bool education,
        bool workHistory,
        bool phoneNumber,
        bool homeAddress,
        bool dateOfBirth
    ) public {
        require(users[username].exists, "User does not exist.");
        User storage user = users[username];
        user.visibility.education = education;
        user.visibility.workHistory = workHistory;
        user.visibility.phoneNumber = phoneNumber;
        user.visibility.homeAddress = homeAddress;
        user.visibility.dateOfBirth = dateOfBirth;
    }

    function getVisibility(string memory username) public view returns (Visibility memory) {
        require(users[username].exists, "User does not exist.");
        return users[username].visibility;
    }
}




