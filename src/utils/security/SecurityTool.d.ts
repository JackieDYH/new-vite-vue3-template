/**
 * 安全工具类(加密，解密)
 */
declare class SecurityTool {
    /**
     * 通过glb文件路径加密
     * @param url glb文件路径
     * @param key 密钥
     * @param iv 初始向量
     * @returns 返回File文件
     */
    static EncryptionFromUrlModelToFileAsync(url: string, key: string, iv: string): Promise<File>;
    /**
     * 加密来自glb文件的File数据
     * @param file File文件
     * @param key 密钥
     * @param iv 初始向量
     * @returns 返回File文件
     */
    static EncryptionFromFileModelToFileAsync(file: File, key: string, iv: string): Promise<File>;
    /**
     * 解密来自url的模型(解密成glb文件)
     * @param url
     * @param key
     * @param iv
     * @returns 返回File文件
     */
    static DecryptFromUrlModelToFileAsync(url: string, key: string, iv: string): Promise<File>;
}

export { SecurityTool };
