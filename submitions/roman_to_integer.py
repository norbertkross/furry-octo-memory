class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        
        symbolArray = {'i':1,'v':5,'x':10,'l':50,'c':100,'d':500,'m':1000}
        symbolValues = [1,5,10,50,100,500,1000]
        
        specialCases = ['iv','ix','xl','xc','cd','cm']
        specialDict = {'iv':4,'ix':9,'xl':40,'xc':90,'cd':400,'cm':900}

        
        if len(s) > 1:
            
            if s.lower() in specialCases:
                return specialDict['{0}'.format(s).lower()]
            else:
                j=0
                result = 0
                while j < len(s.lower()):
                   
                    firstItem = s[j].lower()                    
                    
                    if j == (len(s.lower())-1):
                        secondItem = firstItem
                    else:
                        secondItem = s[j + 1].lower()
                    
                    if symbolArray['{0}'.format(secondItem)] <= symbolArray['{0}'.format(firstItem)]:                        
                        # Normal Flow
                        # print("ARV: {0}".format(symbolArray['{0}'.format(firstItem)])                              
                        result = result + symbolArray['{0}'.format(firstItem)]
                              
                        j += 1
                    else:
                        # The flow is out of sync
                        upper = symbolArray['{0}'.format(secondItem)]
                        lower = symbolArray['{0}'.format(firstItem)]
                        
                        result += (upper-lower)
                        j += 2
                     
                return result                        
            
        else:
            return symbolArray['{0}'.format(s).lower() ]   

solution = Solution()
solution.romanToInt('i')
