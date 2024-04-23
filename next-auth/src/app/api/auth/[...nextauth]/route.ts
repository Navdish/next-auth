import NextAuth, {NextAuthOptions} from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import  CredentialsProvider from 'next-auth/providers/credentials'

export const options : NextAuthOptions = {
    providers: [
        GithubProvider({
            clientId : process.env.GITHUB_ID as string,
            clientSecret : process.env.GITHUB_SECRET as string,
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: 'Enter name',
                    type: 'text'
                },
                password: {
                    label:"password",
                    type:"password"
                }
            },
            async authorize(credentials:any) {
                const user = { id: '42', name:'a', password:'a'}
                console.log("credentials", credentials);
                if(credentials?.username ===  user.name && credentials?.password === user.password ) {
                    return user
                } else {
                    return null
                } 
            }
        })
        ],
}

const handler = NextAuth(options)

export {handler as GET, handler as POST}

// clientId: '0c9b44dace355fb47286',
// clientSecret: 'e628960284bd6620290ac705fb94cbe3709c798d'