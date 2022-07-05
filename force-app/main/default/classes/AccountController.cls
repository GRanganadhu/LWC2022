public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAllAccounts(){
        try {
            return [SELECT Name, Rating FROM Account ORDER BY Name ASC];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> searchAccount(String str){
        str+='%';
        try {
            return [SELECT Name, Rating FROM Account WHERE Name LIKE:str ORDER BY Name ASC];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    }
