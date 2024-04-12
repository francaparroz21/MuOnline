export const querys = {
    getAllAccounts: "SELECT * FROM MEMB_INFO",
    postAccount:  "INSERT INTO [MuOnline97].[dbo].[MEMB_INFO] (memb___id, memb__pwd, memb_name, sno__numb, bloc_code) VALUES (@username,@password,@name,@code,@bloc_code);",
    changePasswordAccount: "UPDATE [MuOnline97].[dbo].[MEMB_INFO] SET memb__pwd = @password WHERE memb_guid = @id",
    findAccountById: "SELECT * FROM [MuOnline97].[dbo].[MEMB_INFO] where memb_guid = @id"
}