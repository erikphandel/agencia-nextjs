import Header from "@/components/Header";
import styles from "./page.module.css"
import Footer from "@/components/Footer";

//Texto da página gerado por IA
export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.homeFlexbox}>
        <p className={styles.homeText}>A Next.js é uma agência de viagens fictícia criada para representar um novo conceito de exploração do mundo: leveza, tecnologia e personalização em cada experiência. Seu time combina atendimento acolhedor com ferramentas digitais avançadas, permitindo que cada cliente monte roteiros flexíveis, encontre tarifas competitivas e tenha acesso imediato a informações confiáveis sobre destinos ao redor do globo. A proposta da agência é transformar o planejamento de viagens em algo intuitivo, transparente e divertido, fazendo com que cada passo — desde a escolha do destino até o retorno para casa — seja simples e prazeroso.</p>
        <p className={styles.homeText}>Além disso, a Next.js aposta na criação de viagens totalmente adaptadas ao estilo de vida de cada pessoa. A agência oferece desde expedições aventureiras e rotas culturais até escapadas relaxantes para quem busca descanso absoluto. Tudo é pensado para que o viajante se sinta acompanhado do início ao fim, com suporte rápido, recomendações inteligentes e curadoria especializada. Assim, a Next.js se destaca como uma parceira moderna e confiável para quem deseja conhecer o mundo com autenticidade e sem complicações.</p>
      </div>
      <Footer />
    </>
  );
}
