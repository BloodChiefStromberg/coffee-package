class @CoffeePackageHandle.Base #this should create a package level variable with this class attatched
 constructor: (@isBase) ->
   return true

CoffeePackageHandle = @CoffeePackageHandle #this is a file scope variable, but we'll use api.export
                                           #make this available in the final app 
