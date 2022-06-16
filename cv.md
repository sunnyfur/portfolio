
# Polina Makarova
**********

## Contacts

- **Phone:** +7-912-885-36-22
- **E-mail:** polin.makarova@mail.ru
- **Telegram:** @polin_makarova
- **GitHub:** [sunnyfur](https://github.com/sunnyfur)

## Summary


## Skills
- HTML, CSS
- JavaScript
- React
- C#, NET
- Figma, Adobe Photoshop, InDesign

## Code example

**[Implement strStr().](https://leetcode.com/problems/implement-strstr) from LEETCODE:**
*Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.*

```
var strStr = function(haystack, needle){
   if (!needle) return 0;
   for (let i=0; i<haystack.length; i++){
       if (haystack[i]==needle[0]){
           let found=true;
           for (let j=1; j<needle.length; j++){
               if (i+j>=haystack.length || haystack[i+j]!=needle[j]){
                   found=false;
                   break;
               } 
           }
           if (found) return i;
        }
   }
   return -1;    
};
```


## Education

* **Perm State University** 
  + Applied Mathematics and Computer Science
* **National Research University Higher School of Economics** 
  + Object-oriented programming
* **ItGirlsSchool**
  + FrontEnd Developer   


## Experience


## Languages
English - A2
