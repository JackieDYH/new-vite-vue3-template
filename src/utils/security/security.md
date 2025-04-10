## 加解密使用说明

```
import { SecurityTool } from '@/utils/security/SecurityTool';
//备注：加解密函数返均是promise,返回的均是file数据
SecurityTool.EncryptionFromUrlModelToFileAsync(url,key,iv);  //通过glb文件路径加密
SecurityTool.DecryptFromUrlModelToFileAsync(url,key, iv);   //解密来自url的模型(解密成glb文件)
SecurityTool.EncryptionFromFileModelToFileAsync(file, key, iv); //加密来自glb文件的File数据

```

